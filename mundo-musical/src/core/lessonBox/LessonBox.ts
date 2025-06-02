import type { LBoxComponent } from './types';

export class LessonBox implements LBoxComponent {
  constructor(private title: string, private actual: number, private total: number, private chapter: number) {}

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
