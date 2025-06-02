import { useState, useEffect } from "react";
import { LessonModule } from "@/core/lesson/LessonModule";
import type { LessonComponent } from "@/core/lesson/types";
import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  module: LessonModule;
}

export const LessonModuleView = ({ module }: Props) => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const trigger = () => forceUpdate(n => n + 1);
    module.subscribe(trigger);
    return () => module.unsubscribe(trigger);
  }, [module]);

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            {module.isCompleted() ? (
              <CheckCircle2 className="text-green-500" size={20} />
            ) : (
              <Circle className="text-muted-foreground" size={20} />
            )}
            {module.getTitle()}
          </h2>
          <Button
            variant={module.isCompleted() ? "outline" : "default"}
            onClick={() => module.toggleComplete()}
          >
            {module.isCompleted() ? "✅ Concluído" : "Concluir módulo"}
          </Button>
        </div>

        <div className="space-y-3">
          {module.getChildren().map(lesson => (
            <LessonView key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const LessonView = ({ lesson }: { lesson: LessonComponent }) => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const trigger = () => forceUpdate(n => n + 1);
    lesson.subscribe(trigger);
    return () => lesson.unsubscribe(trigger);
  }, [lesson]);

  return (
    <div
      className="flex items-center justify-between border rounded-md p-3 hover:bg-accent cursor-pointer"
    >
      <div className="flex items-center gap-2">
        {lesson.isCompleted() ? (
          <CheckCircle2 className="text-green-500" size={18} />
        ) : (
          <Circle className="text-muted-foreground" size={18} />
        )}
        <span className="text-base">{lesson.getTitle()}</span>
      </div>
      <Button 
        variant="ghost" 
        size="sm"
        onClick={() => lesson.toggleComplete()}
      >
        {lesson.isCompleted() ? "Desmarcar" : "Concluir"}
      </Button>
    </div>
  );
};
