import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-banner',
  standalone: true,
  imports: [],
  templateUrl: './quote-banner.component.html',
  styleUrl: './quote-banner.component.scss'
})
export class QuoteBannerComponent {

  quotes = [
    'Discipline beats motivation.',
    'Small progess is still progress.',
    'Consistency creates mastery.',
    'Focus creates freedom',
    'Deep work changes everthing.'
  ];

  randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

}
