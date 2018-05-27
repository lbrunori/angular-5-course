import { OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';
import { Directive, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor;

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = 'red';
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  mouseLeave(eventData: Event) {
    this.backgroundColor = 'red';
  }
}
