import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStrikeThrough]',
})
export class StrikeThroughDirective {
    @Input() appStrikeThrough!: boolean;

    constructor(private element: ElementRef, private render: Renderer2) {}

    ngOnChanges() {
        if (this.appStrikeThrough) {
            this.element.nativeElement.style.textDecoration = 'line-through';
        } else {
            this.element.nativeElement.style.textDecoration = 'none';
        }
    }
}
