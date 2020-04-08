
import { Directive, ElementRef, HostListener, Host, Input, OnInit } from '@angular/core';


@Directive({
    selector: '[appHighlight]'
})
export class HighLightDirective implements OnInit {

    @Input()
    highlightColor: string;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        console.log(this.highlightColor)
        this.highlight(this.highlightColor) // inital color
    }
    //native events : javascript events
    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight('pink')

    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null)

    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}