export abstract class ForumComponent {
  protected id: string;
  protected title: string;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }

  getId(): string {return this.id;}

  getTitle(): string {return this.title;}

  add(child: ForumComponent): void {}

  remove(child: ForumComponent): void {}

  getChildren(): ForumComponent[] {return []; }
}
