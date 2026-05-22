import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashborad/pages/dashboard/dashboard.component';
import { FocusRoomComponent } from './features/timer/pages/focus-room/focus-room.component';
import { GoalsComponent } from './features/goals/pages/goals/goals.component';
import { AnalyticsComponent } from './features/analytics/pages/analytics/analytics.component';
import { SettingsComponent } from './features/settings/pages/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'focus',
    component: FocusRoomComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];