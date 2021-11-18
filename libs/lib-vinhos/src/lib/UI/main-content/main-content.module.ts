import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { CrudTableModule} from '@cruds-shared'


@NgModule({
  declarations: [MainContentComponent],
  imports: [
    CommonModule,
    CrudTableModule
  ],
  exports:[MainContentComponent]
})
export class MainContentModule { }
