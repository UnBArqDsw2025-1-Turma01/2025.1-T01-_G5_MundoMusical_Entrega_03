import type { LBoxComponent } from './types';

export class LessonBoxModule implements LBoxComponent {
  constructor(private title: string, private children: LBoxComponent[] = []) {}

  add(component: LBoxComponent) {
    this.children.push(component);
  }

  getTitle(): string {
    return this.title;
  }

  getActual(): number {
    return this.children.reduce((sum, child) => sum + child.getActual(), 0);
  }

  getTotal(): number {
    return this.children.reduce((sum, child) => sum + child.getTotal(), 0);
  }

  getChapter(): string {
    return `Capitulo: test`;
  }

  getInfo(): string {
    return this.children.map(child => `${child.getInfo()}`).join('\n');
  }

  getChildren(): LBoxComponent[] {
    return this.children;
  }
}