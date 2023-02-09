import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, TrendingRoutingModule } from './trending-routing.module';
import { TrendingComponent } from '../trending.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [
    TrendingComponent,
    routedComponents
  ],
  imports: [
    CommonModule,
    TrendingRoutingModule,
    SharedComponentsModule
  ]
})
export class TrendingModule { }
