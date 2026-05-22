import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StatsCardComponent } from '../../../../shared/components/stats-card/stats-card.component';
import { QuoteBannerComponent } from '../../../../shared/components/quote-banner/quote-banner.component';
import { TimerService } from '../../../../core/services/timer.service';
import { StrakWidgetComponent } from '../../../../shared/components/strak-widget/strak-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    StatsCardComponent,
    QuoteBannerComponent,
    StrakWidgetComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  timerService = inject(TimerService);

  productivityScore = 85;

  formatDuration(seconds: number) {
    if (seconds < 60) {
      return `${seconds} sec`;
    }

    const minutes = seconds / 60;
    return Number.isInteger(minutes)
      ? `${minutes} mins`
      : `${minutes.toFixed(1)} mins`;
  }

}
