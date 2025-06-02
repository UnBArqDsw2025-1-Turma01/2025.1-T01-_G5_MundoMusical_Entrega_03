import type { LessonComponent } from './types';

export class Lesson implements LessonComponent {
  constructor(private title: string, private content: string) {}

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }
}
