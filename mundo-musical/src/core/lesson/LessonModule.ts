import type { LessonComponent } from './types';

export class LessonModule implements LessonComponent {
  constructor(private title: string, private children: LessonComponent[] = []) {}

  add(component: LessonComponent) {
    this.children.push(component);
  }

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.children.map(child => `> ${child.getTitle()}: ${child.getContent()}`).join('\n');
  }
}
