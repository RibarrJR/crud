import { NgModule } from '@angular/core';
import { CardModule } from './card.module';
import { DefaultButtonModule } from './components/buttons/button/button.module';
@NgModule({
  imports: [DefaultButtonModule],
  declarations: [],
  exports:[
    DefaultButtonModule,
    CardModule
  ]
})
export class SharedModule {}
