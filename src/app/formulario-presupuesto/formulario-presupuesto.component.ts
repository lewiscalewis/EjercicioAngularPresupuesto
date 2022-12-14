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
  validacion: boolean = true;

  constructor(formularioService: FormularioPresupuestoService) {
    this.formularioService = formularioService;
  }

  ngOnInit() {

  }

  guardarDatos(){
    if(this.entidad != '' && this.cantidad != 0 && this.tipo_entrada != ''){
      console.log(
        this.cantidad,
        this.entidad,
        this.tipo_entrada
      )
      this.formularioService.enviarDatos(new FormularioPresupuesto(this.tipo_entrada, this.entidad, this.cantidad))
      this.validacion = true;
    }else{
      this.validacion = false;
      alert("¡Debe rellenar los campos obligatorios!")
    }
  }

}
