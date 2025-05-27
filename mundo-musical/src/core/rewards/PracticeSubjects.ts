type Observer = () => void;

export class PracticeSubject {
  private observers: Observer[] = [];

  subscribe(fn: Observer) {
    this.observers.push(fn);
  }

  notify() {
    this.observers.forEach(fn => fn());
  }
}

export const practiceSubject = new PracticeSubject();
