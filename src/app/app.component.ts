import { Component } from '@angular/core';
import { ExpandedCardsComponent } from './components/expanded-cards/expanded-cards.component';

@Component({
  selector: 'app-root',
  imports: [ExpandedCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-components';
}
