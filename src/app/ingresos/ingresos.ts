import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.html',
  styleUrl: './ingresos.css'
})
export class Ingresos {
  ingresos: Ingreso[] =[
    
  ]

  constructor(private ingresoService: IngresoService) {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminarIngreso(ingreso);
  }

}
