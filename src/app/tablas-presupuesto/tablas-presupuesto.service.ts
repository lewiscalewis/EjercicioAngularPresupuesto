import { EventEmitter, Injectable } from '@angular/core';
import { Resumen } from 'src/models/Resumen';

@Injectable({
  providedIn: 'root'
})
export class TablasPresupuestoService {

  emiter = new EventEmitter<Resumen>();

  constructor() { }

  enviarDatos(resumen: Resumen){
    this.emiter.emit(resumen);
  }

}
