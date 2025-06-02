import { Mission } from '@/core/missions/Mission';
import { DifferentExercisesStrategy } from '@/core/missions/strategies/DifferentExercisesStrategy';
import { PracticeScaleStrategy } from '@/core/missions/strategies/PracticeScaleStrategy';
import { RhythmLessonStrategy } from '@/core/missions/strategies/RhythmLessonStrategy';
import { BadgePercent, Award, Gem } from 'lucide-react';
import React from 'react';

export const setupMissions = () => {
  return [
    new Mission("Complete 2 práticas de escalas", 20, React.createElement(BadgePercent), new PracticeScaleStrategy(2)),
    new Mission("Complete uma lição de ritmo sem erros", 60, React.createElement(Award), new RhythmLessonStrategy(1)),
    new Mission("Pratique 3 exercícios de tipos diferentes", 50, React.createElement(Gem), new DifferentExercisesStrategy(new Set(["acordes", "escalas", "ritmo"]))),
  ];
};