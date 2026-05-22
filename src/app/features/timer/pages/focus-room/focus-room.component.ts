import { Component, inject } from '@angular/core';
import { TimerCardComponent } from '../../components/timer-card/timer-card.component';

@Component({
  selector: 'app-focus-room',
  standalone: true,
  imports: [TimerCardComponent],
  templateUrl: './focus-room.component.html',
  styleUrl: './focus-room.component.scss'
})
export class FocusRoomComponent {

  // audioService = inject(AudioService);

}
