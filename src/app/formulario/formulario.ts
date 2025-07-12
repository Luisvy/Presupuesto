import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingreso-service';
import { EgresoService } from '../egresos/egreso-service';
import { Egreso } from '../egresos/egreso.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  tipo: string = 'ingresoOperacion';
   // Definimos los elementos de Formulario
   descripcionInput: string | null = null; 
   valorInput: number | null = null; 

  constructor(private ingresoServicio: IngresoService, 
  private egresoServicio: EgresoService) { };

  tipoOperacion(evento: Event){
    const elementoSelect = evento.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }
  
  agregarValor() {
    if(this.descripcionInput != null && this.valorInput != null){
      if(this.tipo === 'ingresoOperacion') {
        this.ingresoServicio.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      } else {
        this.egresoServicio.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput)
        );
      }
    } else {
      console.log("Introduce valores válidos");
    }

    // Reiniciamos los valores de los campos
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
