import type { MissionStrategy } from './MissionStrategy';

export class PracticeScaleStrategy implements MissionStrategy {
  constructor(private practicesCompleted: number) {}

  getProgress(): number {
    return Math.min(this.practicesCompleted / 2, 1);
  }

  isCompleted(): boolean {
    return this.practicesCompleted >= 2;
  }
}
