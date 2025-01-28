import { Component } from '@angular/core';
import { ExpandedCardDirective } from './expanded-card.directive';

@Component({
  selector: 'app-expanded-cards',
  imports: [ExpandedCardDirective],
  templateUrl: './expanded-cards.component.html',
  styleUrl: './expanded-cards.component.css',
})
export class ExpandedCardsComponent {}
