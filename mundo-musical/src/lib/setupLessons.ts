import { Lesson } from "@/core/lesson/Lesson";
import { LessonModule } from "@/core/lesson/LessonModule";

export function createModules(): LessonModule[] {
  const modules: LessonModule[] = [];

  for (let i = 1; i <= 5; i++) {
    const lessons = Array.from({ length: 5 }, (_, j) => {
      const id = `m${i}l${j + 1}`;
      return new Lesson(id, `Lição ${j + 1}`);
    });
    const module = new LessonModule(`mod${i}`, `Módulo ${i}`, lessons);
    modules.push(module);
  }

  return modules;
}
