import type { MissionStrategy } from './strategies/MissionStrategy';

export class Mission {
  constructor(
    public title: string,
    public xp: number,
    public icon: React.ReactNode,
    private strategy: MissionStrategy
  ) {}

  getProgress(): number {
    return this.strategy.getProgress();
  }

  isCompleted(): boolean {
    return this.strategy.isCompleted();
  }
}
