import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  imports: [CommonModule],
  templateUrl: './egresos.html',
  styleUrl: './egresos.css'
})
export class Egresos {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!: number;

  constructor(private egresoService: EgresoService) {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

    calcularPorcentaje(egreso: Egreso) {
    return egreso.valor/this.ingresoTotal;
  }
}
