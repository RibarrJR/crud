import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { ButtonComponent } from './button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule,ButtonModule,FontAwesomeModule],
  declarations: [
    ButtonComponent
  ],
  exports:[ButtonComponent,ButtonModule,FontAwesomeModule]
})
export class DefaultButtonModule {}
