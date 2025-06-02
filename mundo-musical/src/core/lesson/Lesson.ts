import type { LessonComponent } from "./types";

export class Lesson implements LessonComponent {
  private completed = false;
  private listeners: Array<() => void> = [];

  constructor(public id: string, private title: string) {}

  getTitle(): string {
    return this.title;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  toggleComplete(force?: boolean): void {
    this.completed = typeof force === "boolean" ? force : !this.completed;
    this.notify();
  }

  subscribe(listener: () => void): void {
    this.listeners.push(listener);
  }

  unsubscribe(listener: () => void): void {
    this.listeners = this.listeners.filter(fn => fn !== listener);
  }

  private notify() {
    this.listeners.forEach(fn => fn());
  }
}
