export interface MissionStrategy {
  getProgress(): number; // de 0 a 1
  isCompleted(): boolean;
}
