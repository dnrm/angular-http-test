import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: OpenCloseComponent, data: {animation: 'HomePage'}},
  {path: 'details/:name/:lastname/:src', component: DetailsComponent, data: {animation: 'AboutPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
