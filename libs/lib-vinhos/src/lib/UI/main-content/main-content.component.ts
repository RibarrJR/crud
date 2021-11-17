import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vinhos-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  ngOnInit(): void {
    console.log('incializado o componente do main content')
  }

}
