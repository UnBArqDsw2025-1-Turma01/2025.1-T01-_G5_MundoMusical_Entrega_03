import { LessonModuleView } from "@/components/lesson/LessonView";
import { useEffect, useState } from "react";
import { createModules } from "@/lib/setupLessons";
import type { LessonModule } from "@/core/lesson/LessonModule";
import { useParams } from "react-router";

export const Topic = () => {
  const [modules, setModules] = useState<LessonModule[]>([]);
  const { id } = useParams();

  useEffect(() => {
    setModules(createModules());
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tópico: { id } </h1>
      </div>
      {modules.map((module) => (
        <LessonModuleView key={module.id} module={module} />
      ))}
    </main>
  );
}
