import { EventEmitter, Injectable } from '@angular/core';
import { FormularioPresupuesto } from 'src/models/FormularioPresupuesto';

@Injectable({
  providedIn: 'root'
})
export class FormularioPresupuestoService {

emiter = new EventEmitter<FormularioPresupuesto>();

constructor() { }

enviarDatos(formulario: FormularioPresupuesto){
  this.emiter.emit(formulario);
}

}
