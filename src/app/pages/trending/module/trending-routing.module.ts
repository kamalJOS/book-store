import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingComponent } from '../trending.component';

const routes: Routes = [
  {path: '', component: TrendingComponent},
  {path: ':book', component: TrendingComponent}
];

export const routedComponents = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRoutingModule { }
