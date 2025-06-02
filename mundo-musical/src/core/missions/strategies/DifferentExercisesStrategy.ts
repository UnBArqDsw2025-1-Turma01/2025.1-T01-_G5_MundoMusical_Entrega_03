import type { MissionStrategy } from "./MissionStrategy";

export class DifferentExercisesStrategy implements MissionStrategy {
  constructor(private uniqueExerciseTypesPracticed: Set<string>) {}

  getProgress(): number {
    const count = this.uniqueExerciseTypesPracticed.size;
    return Math.min(count / 3, 1);
  }

  isCompleted(): boolean {
    return this.uniqueExerciseTypesPracticed.size >= 3;
  }
}
