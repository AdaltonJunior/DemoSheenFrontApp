import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'home',
  	component: HomeComponent
  },
  { 
    path: 'product-detail', 
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  { 
    path: '',   
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
	  BrowserModule,
	  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
