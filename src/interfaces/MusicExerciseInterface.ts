// Interface comum para todos os exercícios musicais
export interface Exercise {
  id: string;
  type: 'interval' | 'rhythm' | 'chord';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  description: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  points: number;
}

export interface EvaluationResult {
  isCorrect: boolean;
  score: number;
  feedback: string;
  pointsEarned: number;
  correctAnswer?: string;
}

export interface Progress {
  userId: string;
  totalExercises: number;
  completedExercises: number;
  correctAnswers: number;
  totalPoints: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  achievements: string[];
}

// Interface Target do padrão Adapter
export interface MusicExerciseInterface {
  getExercise(difficulty: string, topic: string): Exercise;
  evaluateAnswer(exerciseId: string, answer: string): EvaluationResult;
  getHint(exerciseId: string): string;
  getProgress(userId: string): Progress;
}