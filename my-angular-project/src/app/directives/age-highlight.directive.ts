import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAgeHighlight]'
})
export class AgeHighlightDirective {
  @Input() highlightAge!: number;
  @Input('appAgeHighlight') set age(value: number) {
    this.highlightIfUnderage(value);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private highlightIfUnderage(age: number): void {
    if (age < this.highlightAge) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FFC0CB');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

}
