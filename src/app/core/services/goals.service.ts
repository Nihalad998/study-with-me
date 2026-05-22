import { Injectable, signal } from '@angular/core';
import { Goal } from '../models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor() { 
    this.loadGoals();
  }

  goals = signal<Goal[]>([]);

  addGoal(title: string, priority: 'low' | 'medium' | 'high') {
    const newGoal: Goal = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      createdAt: new Date()
    };
    this.goals.update(goals => [...goals, newGoal]);
    this.saveGoals();
  }

  saveGoals() {
    localStorage.setItem(
      'study-goals',
      JSON.stringify(this.goals())
    );
  }

  toggleGoal(id: number) {
    this.goals.update(goals =>
      goals.map(goal =>
        goal.id === id
          ? {
              ...goal,
              completed: !goal.completed
            }
          : goal
      )
    );
    this.saveGoals();
  }

  deleteGoal( id: number ) {
    this.goals.update(goals =>
      goals.filter(goal => goal.id !== id)
    );
    this.saveGoals();
  }
  
  loadGoals() {
    const storedGoals = localStorage.getItem('study-goals');
    if (storedGoals) {
      this.goals.set(
        JSON.parse(storedGoals)
      );
    }
  }

}
