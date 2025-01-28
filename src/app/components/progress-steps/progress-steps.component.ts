import { Component } from '@angular/core';
import { ProgressStepsDirective } from './progress-steps.directive';

@Component({
  selector: 'app-progress-steps',
  imports: [ProgressStepsDirective],
  templateUrl: './progress-steps.component.html',
  styleUrl: './progress-steps.component.css',
})
export class ProgressStepsComponent {
  steps: number[] = Array(4);
  currentStep = 1;

  next() {
    if (this.currentStep <= this.steps.length) {
      this.currentStep++;
    }

    console.log(this.currentStep);
  }

  prev() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    console.log(this.currentStep);
  }
}
