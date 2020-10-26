import { NgModule } from '@angular/core';


import { InicioComponent } from './inicio.component';
import { Routes, RouterModule } from'@angular/router';



const routes: Routes = [

{ path:'', component: InicioComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
