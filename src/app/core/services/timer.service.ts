import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { Session } from '../models/session.model';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  settingsService = inject(SettingsService);

  duration = signal(25 * 60);
  remainingTime = signal(25 * 60);
  // duration = signal(10);
  // remainingTime = signal(10);

  isRunning = signal(false);
  sessions = signal<Session[]>([]);

  private intervalId: any = null;

  totalFocusMinutes = computed(() => {
    return this.sessions().reduce(
      (total, session) => {
        return total + session.duration / 60;
      },0
    );
  });

  constructor() {
    this.loadSessions();

    effect(() => {
      const focusDuration = this.settingsService.settings().focusDuration;
      const seconds = focusDuration * 60;

      this.duration.set(seconds);
      this.remainingTime.set(seconds);

      console.log('Timer Updated:',seconds);
    },{
      // Updates focus duration when changes from setting. 
      allowSignalWrites: true 
    });
  }

  startTimer() {
    if (this.intervalId) return;
    this.isRunning.set(true);
    this.intervalId = setInterval(() => {
      if (this.remainingTime() > 0) {
        this.remainingTime.update(v => v - 1);
      } else {
        this.completeSession();
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isRunning.set(false);
  }

  resetTimer() {
    this.pauseTimer();
    this.remainingTime.set(this.duration());
  }

  setTimer(minutes: number) {
    this.pauseTimer();
    const seconds = minutes * 60;
    this.duration.set(seconds);
    this.remainingTime.set(seconds);
  }

  completeSession() {
    const session: Session = {
      id: Date.now(),
      duration: this.duration(),
      completedAt: new Date()
    };

    this.sessions.update(v => [...v, session]);
    this.saveSessions();
  }

  saveSessions() {
    localStorage.setItem('study-sessions', JSON.stringify(this.sessions()));
  }

  loadSessions() {
    const stored = localStorage.getItem('study-sessions');

    if (stored) {
      this.sessions.set(JSON.parse(stored));
    }
  }
}