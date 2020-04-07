
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ReactiveFormsComponent {


  //Data 
  langs: string[] = [
    'English',
    'French',
    'German',
  ]
  searchField: FormControl;
  searches: string[] = [];


  //create FormGroup Object and FormControl Object.
  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      //nested form group
      name: new FormGroup({
        firstName: new FormControl('Subramanian', Validators.required),
        lastName: new FormControl('Murugan', Validators.required),
      }),
      email: new FormControl('',
        [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)]),
      language: new FormControl(this.langs[0])
    });
    //search Field Object
    this.searchField = new FormControl('');

    //Search Logic : get search items and add into an array
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        filter(v => v !== '')
      ).subscribe(item => {
        this.searches.push(item);
      })


  }






  onSubmit() {
    if (this.myform.valid) {
      alert("Form Submitted!");
      console.log(this.myform.value)
      this.myform.reset();
    }
  }


}
