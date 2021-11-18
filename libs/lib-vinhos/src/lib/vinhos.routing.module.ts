import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './UI/main-content/main-content.component';

// import lib

const routes: Routes = [
  { path: '',component:MainContentComponent},
	// { path: '**', redirectTo: '',component:MainContentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinhosRoutingModule { }
