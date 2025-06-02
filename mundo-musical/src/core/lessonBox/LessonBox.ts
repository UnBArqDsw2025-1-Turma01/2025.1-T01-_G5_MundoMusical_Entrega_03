import type { Subject, Concluido } from '../Concluido/concluido';
import type { LBoxComponent } from './types';

export class LessonBox implements LBoxComponent, Subject {
  private concluidos: Concluido[] = [];
  constructor(private title: string, private actual: number, private total: number, private chapter: number) {}

    subscribe(concluido: Concluido) {
    this.concluidos.push(concluido);
  }

  unsubscribe(concluido: Concluido) {
    this.concluidos = this.concluidos.filter(obs => obs !== concluido);
  }

  notify() {
    this.concluidos.forEach(concluido => concluido());
  }

  markAsCompleted() {
    this.actual = this.total;
    this.notify();
  }

  isCompleted(): boolean {
    return this.actual >= this.total;
  }

  getTitle(): string {
    return this.title;
  }

  getActual(): number {
    return this.actual;
  }

  getTotal(): number {
    return this.total;
  }

  getChapter(): string {
    return `Capitulo: ${this.chapter}`;
  }

  getInfo(): string {
    return `${this.getTitle()}
          ${this.getChapter()}
          Lição ${this.getActual()} de ${this.getTotal()}`;
  }
}
