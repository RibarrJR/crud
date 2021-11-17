import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonType!: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  ngOnInit(): void {
    this.componenteIniciado();


  }


  componenteIniciado() {
    // eslint-disable-next-line no-restricted-syntax
    console.debug('Iniciou o Componente');
  }



}
