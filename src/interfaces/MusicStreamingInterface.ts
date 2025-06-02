// src/interfaces/MusicExerciseInterface.ts
export interface Exercise {
  id: string;
  type: 'interval' | 'rhythm' | 'chord' | 'scale' | 'melody';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  description: string;
  question: string;
  options?: string[];
  audioUrl?: string;
  imageUrl?: string;
  timeLimit?: number;
  points: number;
}

export interface EvaluationResult {
  isCorrect: boolean;
  score: number;
  feedback: string;
  correctAnswer?: string;
  explanation?: string;
  pointsEarned: number;
  streakBonus?: number;
}

export interface Progress {
  userId: string;
  totalExercises: number;
  completedExercises: number;
  correctAnswers: number;
  totalPoints: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
}

export interface MusicExerciseInterface {
  getExercise(difficulty: string, topic: string): Promise<Exercise>;
  evaluateAnswer(exerciseId: string, answer: any): Promise<EvaluationResult>;
  getHint(exerciseId: string): Promise<string>;
  getProgress(userId: string): Promise<Progress>;
}