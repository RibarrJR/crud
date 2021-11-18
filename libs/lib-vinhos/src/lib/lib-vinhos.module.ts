import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentModule } from './UI/main-content/main-content.module';
import { MenuModule } from './UI/menu/menu.module';
import { VinhosRoutingModule } from './vinhos.routing.module';
@NgModule({
  imports: [CommonModule,MainContentModule,MenuModule,VinhosRoutingModule],
  exports:[MainContentModule],
  declarations: [
  ],
})
export class LibVinhosModule {}
