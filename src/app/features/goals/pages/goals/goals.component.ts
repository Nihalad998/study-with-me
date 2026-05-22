import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoalsService } from '../../../../core/services/goals.service';


@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [ 
    CommonModule, 
    FormsModule
  ],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {

  goalTitle = '';
  selectedPriority: 'high' | 'medium' | 'low' =
    'medium';

  goalsService = inject(GoalsService);

  addGoal() {
    if (!this.goalTitle.trim()) 
      return;

    this.goalsService.addGoal(this.goalTitle, this.selectedPriority);
    this.goalTitle = '';
    this.selectedPriority = 'medium';
  }

}
