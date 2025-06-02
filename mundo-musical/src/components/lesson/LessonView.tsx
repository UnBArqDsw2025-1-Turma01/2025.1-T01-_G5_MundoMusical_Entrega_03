import React from 'react';
import { Lesson } from '@/core/lesson/Lesson';
import { LessonModule } from '@/core/lesson/LessonModule';
import { UserProgress } from '@/core/user/UserProgress';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

// 1. Importa o arquivo MP3 (Vite/Webpack resolve isso automaticamente)
import acordeMp3 from '@/assets/acorde.mp3';

export const LessonView = () => {
  // Cria o módulo e adiciona lições
  const module = new LessonModule('🎵 Módulo 1: Intervalos');
  module.add(new Lesson('Intervalo de 3ª', 'Do primeiro ao terceiro grau, exemplo: C até E.'));
  module.add(new Lesson('Intervalo de 5ª', 'Do primeiro ao quinto grau, exemplo: C até G.'));

  // Handler de conclusão
  const handleComplete = () => {
    UserProgress.getInstance().completeLesson();
    // Aqui você pode também notificar um manager de recompensas, se existir:
    // practiceSubject.notify();

    toast.success('Módulo concluído!', {
      description: 'Você ganhou uma recompensa por completar este módulo. 🎉',
      duration: 4000,
    });
  };

  return (
    <Card className="mb-8 shadow-md border-2 border-muted rounded-2xl">
      <CardContent className="p-6 space-y-5">
        {/* Título e descrição do módulo */}
        <div>
          <h2 className="text-2xl font-bold mb-1">{module.getTitle()}</h2>
          <p className="text-muted-foreground text-sm">
            Pratique os intervalos musicais com exemplos simples.
          </p>
        </div>

        <Separator />

        {/* Player de áudio */}
        <div className="w-full">
          {/* O atributo controls exibe os botões nativos de play/pause/volume */}
          <audio
            controls
            src={acordeMp3}
            className="w-full h-10 rounded-md border border-gray-300"
          >
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>

        <Separator />

        {/* Conteúdo das lições (aqui apenas mostramos as linhas de texto) */}
        <div className="space-y-3">
          {module
            .getContent()
            .split('\n')
            .map((line, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-[3px]" size={18} />
                <p className="text-base leading-relaxed">{line}</p>
              </div>
            ))}
        </div>

        {/* Botão para marcar como concluído */}
        <Button size="lg" className="w-full mt-4" onClick={handleComplete}>
          ✅ Marcar como concluído
        </Button>
      </CardContent>
    </Card>
  );
};
