import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import lib

const routes: Routes = [
  { path: '', redirectTo: '/vinhos', pathMatch: 'full' },
	{ path: '**', redirectTo:'/vinhos'},
	{ path: 'vinhos', loadChildren:()=> import('@vinhos').then(v=>v.LibVinhosModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
