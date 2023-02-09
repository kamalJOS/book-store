import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { HomeComponent } from '../home.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';


@NgModule({
  declarations: [
    HomeComponent,
    routedComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule
  ]
})
export class HomeModule { }
