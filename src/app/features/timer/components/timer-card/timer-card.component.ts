import { Component, computed, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerService } from '../../../../core/services/timer.service';

@Component({
  selector: 'app-timer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer-card.component.html',
})
export class TimerCardComponent {

  timerService = inject(TimerService);

  radius = 120;
  circumference = 2 * Math.PI * this.radius;

  progress = computed(() => {
    return (
      this.timerService.remainingTime() /
      this.timerService.duration()
    );
  });

  dashOffset = computed(() => {
    return this.circumference * (1 - this.progress());
  });

  formattedTime = computed (() => {
    const minutes = Math.floor(
      this.timerService.remainingTime() / 60
    );
    
    const seconds = this.timerService.remainingTime() % 60;

    return `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
  });

   @HostListener(
    'window:keydown',
    ['$event']
  )

  handleKeyboard(
    event: KeyboardEvent
  ) {
    if(event.code === 'Space') {
      event.preventDefault();
      if(this.timerService.isRunning()) {
        this.timerService.pauseTimer();
      } else {
        this.timerService.startTimer();
      }
    }
    if(event.key.toLowerCase() === 'r') {
      this.timerService.resetTimer();
    }
  }

}