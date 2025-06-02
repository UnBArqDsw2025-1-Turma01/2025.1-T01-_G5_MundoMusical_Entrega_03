import type { LessonComponent } from "./types";

export class LessonModule implements LessonComponent {
  private listeners: Array<() => void> = [];

  constructor(public id: string, private title: string, private children: LessonComponent[] = []) {
    // propaga atualização dos filhos para o módulo
    children.forEach(child => child.subscribe(() => this.notify()));
  }

  add(component: LessonComponent) {
    this.children.push(component);
    component.subscribe(() => this.notify());
  }

  getTitle(): string {
    return this.title;
  }

  getChildren(): LessonComponent[] {
    return this.children;
  }

  isCompleted(): boolean {
    return this.children.every(child => child.isCompleted());
  }

  toggleComplete(force?: boolean): void {
    const shouldComplete = typeof force === "boolean" ? force : !this.isCompleted();
    this.children.forEach(child => child.toggleComplete(shouldComplete));
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
