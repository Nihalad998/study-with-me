import { Injectable, signal } from '@angular/core';
import { AppSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = signal<AppSettings>({
    darkMode: true,
    soundEnabled: true,
    volume: 0.5,
    autoStartBreaks: false,
    focusDuration: 25
  });

  constructor() {
    this.loadSettings();
    this.applyTheme();
  }

  updateSettings(
    updateSettings: Partial<AppSettings>
  ) {
    this.settings.update(current => ({
      ...current,
      ...updateSettings
    }));

    this.applyTheme();
    this.saveSettings();
  }

  applyTheme() {
    if (this.settings().darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  saveSettings() {
    localStorage.setItem(
      'study-settings',
      JSON.stringify(this.settings())
    );
  }

  loadSettings() {
    const stored = localStorage.getItem('study-settings');

    if(stored) {
      this.settings.set(JSON.parse(stored));
    }
  }

  resetSettings() {
    localStorage.clear();
    location.reload();
  }

}
