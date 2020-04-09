import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-contactus',
    template: `
        <h1>Contact Us - {{title}}</h1>
        <pre>
            {{urlsec | json}}
        </pre>
    `
})
export class ContactUsComponent {
    urlsec: any;
    title: string;
    constructor(private routerState: ActivatedRoute) { }
    ngOnInit() {
        //url
        this.routerState.url.subscribe(urlinfo => {
            urlinfo.forEach(urlseg => {
                console.log(urlseg.path);
                this.urlsec = urlseg
            });
        });
        //data 
        this.routerState.data.subscribe(info => {
            console.log(info);
            this.title = info.title
        }

        )
    }
}