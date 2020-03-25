import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './home/detalhe/detalhe.component';


const routes: Routes = [
  {
    path: "", 
    children: [
      {
        path: "", component: HomeComponent
      },
      {
        path: "detalhe/:id", children: [
          {
            path: "", component: DetalheComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
