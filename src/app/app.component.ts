import { Component } from '@angular/core';
import { TablasPresupuestoService } from './tablas-presupuesto/tablas-presupuesto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'pruebas-sueltas';

  ingresos: number = 0;
  gastos: number = 0;
  porcentaje: number = 0;

  tablaService: TablasPresupuestoService;

  constructor(tablaService: TablasPresupuestoService){
    this.tablaService = tablaService;
    this.tablaService.emiter.subscribe(x => {
      this.ingresos = x.ingresos;
      this.gastos = x.gastos;
      this.porcentaje = x.porcentaje;
    })
  }
}
