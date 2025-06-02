import type { IAuthObserver } from './IAuthObserver';

export class SimpleObserver implements IAuthObserver {
  private callback: (auth: boolean) => void;

  constructor(callback: (auth: boolean) => void) {
    this.callback = callback;
  }

  update(isAuthenticated: boolean): void {
    this.callback(isAuthenticated);
  }
}
