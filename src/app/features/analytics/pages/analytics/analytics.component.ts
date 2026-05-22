import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { StatsCardComponent } from '../../../../shared/components/stats-card/stats-card.component';
import { TimerService } from '../../../../core/services/timer.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective,
    StatsCardComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {

  timerService = inject(TimerService);

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    datasets: [
      {
        data: [2, 4, 3, 6, 5, 7, 4],
        label: 'Foucs Hours',
        tension: 0.4,
        borderWidth: 3,
        fill: true,
        pointRadius: 5
      }
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    // plugins: {
    //   legend: {
    //     display: true,
    //   },
    // }
  };

  totalHours() {
    return (
      this.timerService.totalFocusMinutes() / 60
    ).toFixed(1);
  }

  averageSession() {
    const sessions = this.timerService.sessions();

    if (!sessions.length)
      return 0;

    const totalSeconds = sessions.reduce((total, sessions) => total + sessions.duration, 0);

    return totalSeconds / sessions.length;
  }

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
