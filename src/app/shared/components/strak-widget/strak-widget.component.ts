import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StreakService } from '../../../core/services/streak.service';

@Component({
  selector: 'app-strak-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strak-widget.component.html',
  styleUrl: './strak-widget.component.scss'
})
export class StrakWidgetComponent {

  streakService = inject(StreakService);

}
