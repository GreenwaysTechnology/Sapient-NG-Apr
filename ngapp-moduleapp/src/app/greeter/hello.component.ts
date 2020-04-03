import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-hello',
  template: `
      <h1>{{message}}</h1>  
  `,
  //providers: [HelloService]//component
})
export class HelloComponent implements OnInit {
  message = 'loading...'; //for transfering to view

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    // Get the data by calling service object and update message
    //this.message = this.helloService.sayHello();
    // this.helloService.sayHello(message => {
    //   this.message = message;
    // });
    this.helloService.sayHello().then(message => {
      this.message = message;
    });
  }

}
