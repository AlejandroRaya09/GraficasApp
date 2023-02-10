import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './paginas/barras/barras.component';
import { BarrasDobleComponent } from './paginas/barras-doble/barras-doble.component';
import { DonaComponent } from './paginas/dona/dona.component';
import { DonaHttpComponent } from './paginas/dona-http/dona-http.component';
import { GraficaBarraComponent } from './componentes/grafica-barra/grafica-barra.component';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
