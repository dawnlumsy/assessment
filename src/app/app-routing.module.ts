import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcomponentComponent } from './components/firstcomponent.component';
import { SecondcomponentComponent } from './components/secondcomponent.component';


const routes: Routes = [
  { path: '', component: FirstcomponentComponent },
  { path: 'confirm', component: SecondcomponentComponent },   
  { path: '**', redirectTo: '/', pathMatch: 'full' }   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
