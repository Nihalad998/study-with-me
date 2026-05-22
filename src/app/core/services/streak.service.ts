import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreakService {

  currentStreak = signal(1);
  longestStreak = signal(1);

  constructor() { 
    this.loadStreak();
  }

  loadStreak() {
    const stored = localStorage.getItem('study-streak');
    if (stored) {
      const data = JSON.parse(stored);
      this.currentStreak.set(data.currentStreak);
      this.longestStreak.set(data.longestStreak);
    }
  }

  increaseStreak() {
    this.currentStreak.update(v => v + 1);
    if(this.currentStreak() > this.longestStreak()) {
      this.longestStreak.set(this.currentStreak());
    }
    this.saveStreak();
  }

  saveStreak() {
    localStorage.setItem(
      'study-streak',
      JSON.stringify({
        currentStreak: this.currentStreak(),
        longestStreak: this.longestStreak(),
      })
    );
  }
}
