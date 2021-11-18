import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from '@cruds-shared';
import { CardModule } from 'primeng/card';

describe('AppComponent', () => {
  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MenubarModule,
        SharedModule,
        InputTextModule,
        TabViewModule,CardModule
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'core'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('core');
  });

  it(`deve abrir uma url em uma nova aba quando clicado no card`,()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const ENVIRONMENTS:URL= new URL('http://google.com');
    const newTab= app.openApp(ENVIRONMENTS);
    expect(newTab).toBeTrue();
  });

});
