import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpandedCard]',
})
export class ExpandedCardDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.toggleCard();
  }

  private toggleCard() {
    const allCards = document.querySelectorAll('[appExpandedCard]');

    allCards.forEach((card) => {
      card.classList.remove('active');
    });

    this.el.nativeElement.classList.add('active');
  }
}
