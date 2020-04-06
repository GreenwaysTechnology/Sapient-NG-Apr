import { Component, OnInit } from '@angular/core';
import { GeoService } from './services/geo.service';
import { OperatorService } from './services/operators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1: string = '';
  user2: string = ''
  constructor(private service: OperatorService) { }

  ngOnInit() {
    const example = this.service.broadCast()

    const subscribe = example.subscribe(val => {
      console.log(`Subscriber One: ${val}`)
      this.user1 = val;
    });
    
    setTimeout(() => {
      const subscribeTwo = example.subscribe(val => {
        this.user2 = val;
        console.log(`Subscriber Two: ${val}`)
      }
      );
    },10000)

  }
}
