import { useEffect, useState } from 'react';
import { practiceSubject } from '@/core/rewards/PracticeSubjects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const DailyReward = () => {
  const [earned, setEarned] = useState(false);

  useEffect(() => {
    practiceSubject.subscribe(() => setEarned(true));
  }, []);

  return (
    <Card className={cn('transition-all duration-300', earned && 'border-green-500')}>
      <CardContent className="flex items-center gap-4 p-5">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
          <Sparkles />
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            {earned ? 'Parabéns! 🎉' : 'Recompensa diária'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {earned
              ? 'Você conquistou sua recompensa por hoje.'
              : 'Complete uma lição para ganhar sua recompensa diária.'}
          </p>
          {earned && (
            <Badge className="mt-2" variant="outline">
              Recompensa desbloqueada
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
