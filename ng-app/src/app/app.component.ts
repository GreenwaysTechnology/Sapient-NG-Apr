import { Component, ViewEncapsulation, EventEmitter, Injectable, NgModule, Output, Input } from '@angular/core';
import { Address } from './types';
import { AppModule } from './app.module';


//child component

@Component({
  selector: 'app-child',
  template: ` 
     <button (click)="sendData()">Send Data to Parent</button>
  `
})
export class ChildComponent {

  @Input()
  msg: string;
  //declare customevent
  /**
   * sendRequest is name of the event
   * @Output indicates that we are going to send some data
   */
  @Output()
  sendRequest = new EventEmitter<string>();

  sendData() {
    //send data to parent by emitting event
    this.sendRequest.emit(this.msg);
  }

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`
        h1 {
            font-weight: normal; 
            background-color: pink;
        }
  `],
  // styleUrls: ['app.component.css'],
  //encapsulation : ViewEncapsulation.Emulated //only that component/parent compoent
  //encapsulation: ViewEncapsulation.None //compoent + parent
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  constructor() { }


  // model
  title: string = 'Angular Application';
  //numbers
  views: number = 10;
  //boolean
  isActive: boolean = true;
  //object
  address: Address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
  }
  //array
  skills: string[] = ['Javascript', 'TypeScript', 'Angular', 'React'];
  //property binding
  itemImageUrl = '../assets/c0494701.png';
  isEnabled = false;
  shouldBeSpecial = "true";

  classes = 'special'
  message = 'hello '
  propertyTitle = 'Helllo  '
  interpolationTitle = 'Helo'
  //style 
  somecolor = 'green';
  mystyle = {
    width: '100px',
    height: '100px',
    color: 'red',
    fontSize: '16px'

  }
  onUpdate(input) {
    alert('On update is called' + input)
  }
  userInput: string = ";"
  quote: string = '';

  onChange(evt: any) {
    this.userInput = evt.target.value
  }

  childMessage: string;
  readMessage(evt) {
    this.childMessage = evt;
  }
}
