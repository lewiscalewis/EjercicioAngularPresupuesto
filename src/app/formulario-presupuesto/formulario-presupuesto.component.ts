import { Component, OnInit } from '@angular/core';
import { FormularioPresupuesto } from 'src/models/FormularioPresupuesto';
import { FormularioPresupuestoService } from './formulario-presupuesto.service';

@Component({
  selector: 'app-formulario-presupuesto',
  templateUrl: './formulario-presupuesto.component.html',
  styleUrls: ['./formulario-presupuesto.component.scss']
})
export class FormularioPresupuestoComponent implements OnInit {

  tipo_entrada: string = "";
  entidad: string = "";
  cantidad: number = 0;
  formularioService: FormularioPresupuestoService;

  constructor(formularioService: FormularioPresupuestoService) {
    this.formularioService = formularioService;
  }

  ngOnInit() {

  }

  guardarDatos(){
    this.formularioService.enviarDatos(new FormularioPresupuesto(this.tipo_entrada, this.entidad, this.cantidad))
  }

}
