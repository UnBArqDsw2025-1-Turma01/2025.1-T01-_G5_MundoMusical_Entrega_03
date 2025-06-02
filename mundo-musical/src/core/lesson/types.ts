export interface LessonComponent {
  id: string;
  getTitle(): string;
  isCompleted(): boolean;
  toggleComplete(force?: boolean): void;
  subscribe(listener: () => void): void;
  unsubscribe(listener: () => void): void;
}
