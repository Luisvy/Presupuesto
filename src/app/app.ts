import { Component } from '@angular/core';
import { Cabecero } from './cabecero/cabecero';
import { Formulario } from './formulario/formulario';
import { Ingresos } from './ingresos/ingresos';
import { Egresos } from './egresos/egresos';
import { Ingreso } from './ingresos/ingreso.model';
import { Egreso } from './egresos/egreso.model';
import { IngresoService } from './ingresos/ingreso-service';
import { EgresoService } from './egresos/egreso-service';

@Component({
  selector: 'app-root',
  imports: [Cabecero, Formulario, Ingresos, Egresos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Presupuesto Disponible';
  ingreso: Ingreso[] = [];
  egreso: Egreso[] = [];

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingreso = this.ingresoService.ingresos;
    this.egreso = this.egresoService.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal: number = 0;
    this.ingreso.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egreso.forEach(egreso => {
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
