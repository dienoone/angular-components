import {
  Directive,
  ElementRef,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appProgressSteps]',
})
export class ProgressStepsDirective implements OnChanges {
  currentStep = input<number>(1, { alias: 'appProgressSteps' });
  steps = input.required<number>();

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnChanges(): void {
    const width = ((this.currentStep() - 1) / (this.steps() - 1)) * 100;
    this.el.nativeElement.style.width = width + '%';
    console.log(width);
  }
}
