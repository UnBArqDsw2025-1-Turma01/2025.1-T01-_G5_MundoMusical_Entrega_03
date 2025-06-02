import { Mission } from "./Mission";

export class DailyMissionManager {
  private missions: Mission[] = [];
  private level = 1;
  private baseXpPerLevel = 100;
  private currentXp = 0;

  constructor(missions: Mission[]) {
    this.missions = missions;
  }

  setMissions(missions: Mission[]) {
    this.missions = missions;
  }

  getMissions() {
    return this.missions;
  }

  getLevel(): number {
    return this.level;
  }

  getXp(): number {
    const totalXp = this.missions
      .filter(m => m.isCompleted())
      .reduce((sum, m) => sum + m.xp, 0);

    this.level = totalXp > this.baseXpPerLevel ? this.level + 1 : this.level;
    this.currentXp = totalXp % this.baseXpPerLevel;

    return this.currentXp;
  }

  getXpProgressPercent(): number {
    return (this.currentXp / this.baseXpPerLevel) * 100;
  }
}
