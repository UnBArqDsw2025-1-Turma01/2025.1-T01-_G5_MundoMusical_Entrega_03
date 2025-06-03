import type { IAuthObserver } from './IAuthObserver';

export class CompositeObserver implements IAuthObserver {
  private observers: IAuthObserver[] = [];

  add(observer: IAuthObserver): void {
    this.observers.push(observer);
  }

  remove(observer: IAuthObserver): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  clear(): void {
    this.observers = [];
  }

  update(isAuthenticated: boolean): void {
    this.observers.forEach(observer => observer.update(isAuthenticated));
  }
}
