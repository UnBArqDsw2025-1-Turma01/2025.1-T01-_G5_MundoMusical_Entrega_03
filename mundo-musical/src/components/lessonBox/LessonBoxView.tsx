import { useEffect, useState } from 'react';
import { LessonBox } from '@/core/lessonBox/LessonBox';
import { LessonBoxModule } from '@/core/lessonBox/LessonBoxModule';
import { Card, CardContent } from '@/components/ui/card';

export const LessonBoxView = () => {
  const [_, setUpdate] = useState(0);
  const lessonbox = new LessonBoxModule('Licoes');

  const lesson1 = new LessonBox('Leitura de partitura', 4, 4, 3);
  const lesson2 = new LessonBox('Ritmo', 5, 5, 4);
  const lesson3 = new LessonBox('Acordes', 0, 6, 1);

  lessonbox.add(lesson1);
  lessonbox.add(lesson2);
  lessonbox.add(lesson3);

  useEffect(() => {
    const forceUpdate = () => setUpdate(prev => prev + 1);

    lessonbox.getChildren().forEach(child => {
      if (child instanceof LessonBox) {
        child.subscribe(forceUpdate);
      }
    });

    return () => {
      lessonbox.getChildren().forEach(child => {
        if (child instanceof LessonBox) {
          child.unsubscribe(forceUpdate);
        }
      });
    };
  }, []);

  return (
    <Card className="mb-8 shadow-md border-2 border-muted rounded-2xl">
      <CardContent className="p-6 space-y-5">
        <div>
          <h2 className="text-2xl font-bold mb-1">{lessonbox.getTitle()}</h2>
          <h2 className="text-md font-bold mb-1">
            Total lições completadas: {lessonbox.getActual()} de {lessonbox.getTotal()}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessonbox.getChildren().map((child, index) => {
            const isCompleted =
              child instanceof LessonBox && child.isCompleted();

            return (
            <Card
              key={index}
              className={`p-4 shadow-md rounded-lg border-2 ${
              isCompleted ? 'bg-green-100 border-green-500' : 'bg-white border-muted'
              }`}
            >
              <h3 className="text-lg font-semibold">{child.getTitle()}</h3>
              <p>{child.getChapter()}</p>
              <p>
                Lição {child.getActual()} de {child.getTotal()}
              </p>
            </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
