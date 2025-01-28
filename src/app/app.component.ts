import { Component } from '@angular/core';
import { ExpandedCardsComponent } from './components/expanded-cards/expanded-cards.component';
import { ProgressStepsComponent } from './components/progress-steps/progress-steps.component';

@Component({
  selector: 'app-root',
  imports: [ExpandedCardsComponent, ProgressStepsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
