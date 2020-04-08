import { Component } from '@angular/core';
import { of } from 'rxjs';
import { ToDoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  names: string[] = ['A', 'B', 'C', 'D'];
  loading = true;

  isHidden: boolean = false;

  isEnabled: boolean = false;
  status = 'loading...'

  ngOnInit() {
    setTimeout(() => {
      this.loading = !this.loading;
      this.status = 'done!'
    }, 5000)

  }
  feedback: string = 'the execellent';
  color = 'yellow';


  toggle() {
    this.isHidden = !this.isHidden;
  }


}
