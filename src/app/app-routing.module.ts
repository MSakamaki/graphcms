import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './page/notfound/notfound.component';


export const APP_ROUTER: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: 'content-home#ContentHomeModule'
  },
  {
    path: 'archives',
    loadChildren: 'content-archives#ContentArchivesModule'
  },
  {
    path: 'about',
    loadChildren: 'content-about#ContentAboutModule'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTER)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
