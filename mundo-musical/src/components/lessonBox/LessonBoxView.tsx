import { LessonBox } from '@/core/lessonBox/LessonBox';
import { LessonBoxModule } from '@/core/lessonBox/LessonBoxModule';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// import { UserProgress } from '@/core/user/UserProgress';
// import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
// import { practiceSubject } from '@/core/rewards/PracticeSubjects';

export const LessonBoxView = () => {
  const lessonbox = new LessonBoxModule('Licoes');
  lessonbox.add(new LessonBox('Leitura de partitura', 2, 4, 3));
  lessonbox.add(new LessonBox('Ritmo', 3, 5, 4));
  lessonbox.add(new LessonBox('Acordes', 0, 6, 1));

  return (
    <Card className="mb-8 shadow-md border-2 border-muted rounded-2xl">
      <CardContent className="p-6 space-y-5">
        <div>
          <h2 className="text-2xl font-bold mb-1">{lessonbox.getTitle()}</h2>
          <h2 className="text-md font-bold mb-1">{"Total licoes completadas: " + lessonbox.getActual() + " de " + lessonbox.getTotal()}</h2>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessonbox.getChildren().map((child, index) => (
            <Card key={index} className="p-4 border shadow-md rounded-lg">
              <h3 className="text-lg font-semibold">{child.getTitle()}</h3>
              <p>{child.getChapter()}</p>
              <p>Lição {child.getActual()} de {child.getTotal()}</p>
            </Card>
          ))}
        </div>

      </CardContent>
    </Card>
  );
};
