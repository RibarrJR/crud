import { Component } from '@angular/core';
import { faSuitcase, faUtensils, faWineBottle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { environment } from '../environments/environment';


interface ApplicationsList {
  icon: IconDefinition;
  url: URL;
  label:string;
}

@Component({
  selector: 'core-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'core';
  items: MenuItem[] = [];
  appList: ApplicationsList[] = [
    { icon: faWineBottle, url: environment.vinhosApp,label:'Vinhos'},
    { icon: faUtensils, url: environment.restaurantesApp,label:'Restaurantes' },
    { icon: faSuitcase, url: environment.viagensApp,label:'Viagens' },
  ]


  openApp(url: URL): boolean {
    return window.open(url.href, '_blank') ? true : false;
  }


}
