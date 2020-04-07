import { Component } from '@angular/core';
import { PostFormModel } from './forms/PostModel';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: any;
  submitted: boolean = false;
  categories: Array<string>;

  constructor(private service: PostService) { }
  ngOnInit() {
    this.service.listCategory().subscribe(categories => {
      console.log(categories);
      this.categories = categories;
    });
    this.post = new PostFormModel(Math.random(), 'Learn Angular', 'Misko', this.categories[1])
  }


  onSubmit() {
    this.submitted = true;
    this.service.save(this.post);
  }

}
