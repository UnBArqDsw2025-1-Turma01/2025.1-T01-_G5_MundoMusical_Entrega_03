import { ForumComponent } from "@/components/forum/ForumComponent";

export class ForumComposite extends ForumComponent {
  private children: ForumComponent[] = [];

  constructor(id: string, title: string) {
    super(id, title);
  }

  override add(child: ForumComponent): void {
    this.children.push(child);
  }

  override remove(child: ForumComponent): void {
    this.children = this.children.filter(c => c.getId() !== child.getId());
  }

  override getChildren(): ForumComponent[] {
    return this.children;
  }
}
