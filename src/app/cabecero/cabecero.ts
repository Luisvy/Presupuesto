import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  imports: [CommonModule],
  templateUrl: './cabecero.html',
  styleUrl: './cabecero.css'
})
export class Cabecero {
    protected title: string = 'Presupuesto disponible';
    @Input() presupuestoTotal!: number;
    @Input() ingresoTotal!: number;
    @Input() egresoTotal!: number;
    @Input() porcentajeTotal!: number;
}
