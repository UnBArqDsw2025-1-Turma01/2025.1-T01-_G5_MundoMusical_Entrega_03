import { LessonBox } from '@/core/lessonBox/LessonBox';
import { LessonBoxModule } from '@/core/lessonBox/LessonBoxModule';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';
// import { UserProgress } from '@/core/user/UserProgress';
// import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
// import { practiceSubject } from '@/core/rewards/PracticeSubjects';

export const LessonBoxView = () => {
  const lessonbox = new LessonBoxModule('Licoes');
  lessonbox.add(new LessonBox('Licao 1', 2, 4, 3));
  lessonbox.add(new LessonBox('Licao 2', 3, 5, 4));
  lessonbox.add(new LessonBox('Licao 3', 0, 6, 1));

  return (
    <Card className="mb-8 shadow-md border-2 border-muted rounded-2xl">
      <CardContent className="p-6 space-y-5">
        <div>
          <h2 className="text-2xl font-bold mb-1">{lessonbox.getTitle()}</h2>
          <h2 className="text-2m font-bold mb-1">{"Total modulos completados: " + lessonbox.getActual() + "/" + lessonbox.getTotal()}</h2>
        </div>

        <Separator />

        <div className="space-y-3">
          {lessonbox.getInfo()
            .split('\n')
            .map((line, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-[3px]" size={18} />
                <p className="text-base leading-relaxed">{line}</p>
              </div>
            ))}
        </div>

      </CardContent>
    </Card>
  );
};
