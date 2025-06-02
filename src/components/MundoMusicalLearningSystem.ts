import {
  EvaluationResult,
  Exercise,
  MusicExerciseInterface,
  Progress
} from '../interfaces/MusicExerciseInterface';

// Cliente que usa o padrão Adapter
export class MundoMusicalLearningSystem {
  private exerciseProvider: MusicExerciseInterface;
  private currentExercise: Exercise | null = null;

  constructor(exerciseProvider: MusicExerciseInterface) {
    this.exerciseProvider = exerciseProvider;
  }

  setExerciseProvider(provider: MusicExerciseInterface): void {
    this.exerciseProvider = provider;
    this.currentExercise = null;
  }

  startExercise(difficulty: string, topic: string): Exercise {
    this.currentExercise = this.exerciseProvider.getExercise(difficulty, topic);
    return this.currentExercise;
  }

  submitAnswer(exerciseId: string, answer: string): EvaluationResult {
    const result = this.exerciseProvider.evaluateAnswer(exerciseId, answer);
    
    // Lógica adicional de gamificação
    if (result.isCorrect) {
      console.log(`🎉 Parabéns! Você ganhou ${result.pointsEarned} pontos!`);
    }
    
    return result;
  }

  requestHint(exerciseId: string): string {
    return this.exerciseProvider.getHint(exerciseId);
  }

  checkUserProgress(userId: string): Progress {
    return this.exerciseProvider.getProgress(userId);
  }

  getCurrentExercise(): Exercise | null {
    return this.currentExercise;
  }
}