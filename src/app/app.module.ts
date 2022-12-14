import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPresupuestoComponent } from './formulario-presupuesto/formulario-presupuesto.component';
import { TablasPresupuestoComponent } from './tablas-presupuesto/tablas-presupuesto.component';

@NgModule({
  declarations: [		
    AppComponent,
      FormularioPresupuestoComponent,
      TablasPresupuestoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
