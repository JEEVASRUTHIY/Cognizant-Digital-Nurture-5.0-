import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  constructor(private element: ElementRef<HTMLElement>) {}
  @HostListener('mouseenter') enter() { this.element.nativeElement.style.background = this.appHighlight; }
  @HostListener('mouseleave') leave() { this.element.nativeElement.style.background = ''; }
}
