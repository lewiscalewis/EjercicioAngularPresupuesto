import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/models/Gastos';
import { Ingresos } from 'src/models/Ingresos';
import { Resumen } from 'src/models/Resumen';
import { FormularioPresupuestoService } from '../formulario-presupuesto/formulario-presupuesto.service';
import { TablasPresupuestoService } from './tablas-presupuesto.service';

@Component({
  selector: 'app-tablas-presupuesto',
  templateUrl: './tablas-presupuesto.component.html',
  styleUrls: ['./tablas-presupuesto.component.scss']
})
export class TablasPresupuestoComponent implements OnInit {


  gastos: Gastos[] = [];
  ingresos: Ingresos[] = [];
  formularioService: FormularioPresupuestoService;
  tablaService: TablasPresupuestoService;

  constructor(formularioService: FormularioPresupuestoService, tablaService: TablasPresupuestoService) {
    this.formularioService = formularioService;
    this.tablaService = tablaService;
    this.formularioService.emiter.subscribe(x =>
      {
        x.tipo == "gasto" ? this.gastos.push(x) : this.ingresos.push(x);
        tablaService.enviarDatos(this.calcularResumen())
      })
  }

  ngOnInit() {

  }

  calcularResumen(){
    let ingresos: number = 0;
    let gastos: number = 0;
    let porcentaje: number;

    this.ingresos.forEach(x => ingresos += x.cantidad);
    this.gastos.forEach(x => gastos += x.cantidad);

    porcentaje = gastos * 100 / ingresos;

    return new Resumen(ingresos, gastos, porcentaje)
  }



}
