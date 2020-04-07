import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const categories: string[] = ['Angular', 'Typescript', 'React', 'Vue', 'MicroService'];

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor() {  }
    save(post: any) {
        console.log('trigger http post call for saving');
        console.log(post);
    }
    listCategory(): Observable<string[]> {
        return of<string[]>(categories);
    }
}