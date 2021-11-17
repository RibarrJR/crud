import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './UI/menu/menu.component';
import { MainContentComponent } from './UI/main-content/main-content.component';
import { CrudTableComponent } from './UI/crud-table/crud-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MenuComponent,
    MainContentComponent,
    CrudTableComponent
  ],
})
export class LibVinhosModule {}
