import type { MissionStrategy } from "./MissionStrategy";

export class RhythmLessonStrategy implements MissionStrategy {
  constructor(private lessonsCompletedWithoutErrors: number) {}

  getProgress(): number {
    return Math.min(this.lessonsCompletedWithoutErrors / 1, 1);
  }

  isCompleted(): boolean {
    return this.lessonsCompletedWithoutErrors >= 1;
  }
}
