import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudTableComponent } from './crud-table.component';
import { FormsModule } from '@angular/forms';
// prime import
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import {BadgeModule} from 'primeng/badge';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [CrudTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    RatingModule,
    ButtonModule,
    BadgeModule
  ],
  providers:[{provide:LOCALE_ID,useValue:'pt-BR'}],
  exports:[CrudTableComponent]
})
export class CrudTableModule { }
