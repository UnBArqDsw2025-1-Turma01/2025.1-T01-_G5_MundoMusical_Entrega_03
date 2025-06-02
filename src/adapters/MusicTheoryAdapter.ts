import {
  EvaluationResult,
  Exercise,
  MusicExerciseInterface,
  Progress
} from '../interfaces/MusicExerciseInterface';
import { MusicTheoryAPI } from '../services/MusicTheoryAPI';

// Adapter que converte MusicTheoryAPI para MusicExerciseInterface
export class MusicTheoryAdapter implements MusicExerciseInterface {
  private musicTheoryAPI: MusicTheoryAPI;

  constructor() {
    this.musicTheoryAPI = new MusicTheoryAPI();
  }

  getExercise(difficulty: string, topic: string): Exercise {
    const difficultyLevel = this.mapDifficultyToLevel(difficulty);
    const intervalExercise = this.musicTheoryAPI.fetchIntervalExercise(difficultyLevel);
    
    return {
      id: intervalExercise.exerciseId,
      type: 'interval',
      difficulty: difficulty as 'beginner' | 'intermediate' | 'advanced',
      title: 'Identificação de Intervalos',
      description: 'Identifique o intervalo entre as duas notas',
      question: `Qual é o intervalo entre ${intervalExercise.note1} e ${intervalExercise.note2}?`,
      options: [
        'Segunda Maior',
        'Terça Menor', 
        'Terça Maior',
        'Quarta Justa',
        'Quinta Justa',
        'Sexta Maior',
        'Sétima Menor',
        'Oitava'
      ],
      correctAnswer: intervalExercise.intervalType,
      points: intervalExercise.maxScore
    };
  }

  evaluateAnswer(exerciseId: string, answer: string): EvaluationResult {
    const isCorrect = this.musicTheoryAPI.checkIntervalAnswer(exerciseId, answer);
    
    return {
      isCorrect,
      score: isCorrect ? 100 : 0,
      feedback: isCorrect ? 
        '🎉 Excelente! Você identificou o intervalo corretamente!' : 
        '❌ Não foi dessa vez. Tente novamente!',
      pointsEarned: isCorrect ? 10 : 0,
      correctAnswer: isCorrect ? undefined : 'Terça Maior'
    };
  }

  getHint(exerciseId: string): string {
    return this.musicTheoryAPI.getIntervalHint(exerciseId);
  }

  getProgress(userId: string): Progress {
    const userStats = this.musicTheoryAPI.getUserStats(userId);
    return {
      userId: userStats.userId,
      totalExercises: userStats.exercisesCompleted + 20,
      completedExercises: userStats.exercisesCompleted,
      correctAnswers: userStats.correctAnswers,
      totalPoints: userStats.totalScore,
      level: userStats.currentLevel,
      currentStreak: Math.floor(Math.random() * 10),
      longestStreak: Math.floor(Math.random() * 20),
      achievements: ['Conhecedor de Intervalos', 'Teórico Musical']
    };
  }

  private mapDifficultyToLevel(difficulty: string): number {
    const difficultyMap: { [key: string]: number } = {
      'beginner': 1,
      'intermediate': 2,
      'advanced': 3
    };
    return difficultyMap[difficulty] || 1;
  }
}