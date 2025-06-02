import {
  EvaluationResult,
  Exercise,
  MusicExerciseInterface,
  Progress
} from '../interfaces/MusicExerciseInterface';
import { RhythmTrainerAPI } from '../services/RhythmTrainerAPI';

// Adapter que converte RhythmTrainerAPI para MusicExerciseInterface
export class RhythmTrainerAdapter implements MusicExerciseInterface {
  private rhythmTrainerAPI: RhythmTrainerAPI;

  constructor() {
    this.rhythmTrainerAPI = new RhythmTrainerAPI();
  }

  getExercise(difficulty: string, topic: string): Exercise {
    const complexity = this.mapDifficultyToComplexity(difficulty);
    const rhythmPattern = this.rhythmTrainerAPI.generateRhythmPattern(complexity);
    
    return {
      id: rhythmPattern.patternId,
      type: 'rhythm',
      difficulty: difficulty as 'beginner' | 'intermediate' | 'advanced',
      title: 'Treinamento Rítmico',
      description: 'Reproduza o padrão rítmico apresentado',
      question: `Toque o ritmo em ${rhythmPattern.timeSignature} no tempo ${rhythmPattern.tempo} BPM`,
      options: [
        '1-0-1-0 (Básico)',
        '1-0-1-1 (Sincopado)',
        '1-1-0-1 (Complexo)',
        '1-1-1-0 (Acelerado)'
      ],
      correctAnswer: rhythmPattern.beats.join('-'),
      points: rhythmPattern.scoreValue
    };
  }

  evaluateAnswer(exerciseId: string, answer: string): EvaluationResult {
    // Simula entrada do usuário como array
    const userInput = answer.split('-').map(Number);
    const result = this.rhythmTrainerAPI.validateRhythmInput(exerciseId, userInput);
    
    return {
      isCorrect: result.passed,
      score: Math.round(result.accuracy),
      feedback: this.generateRhythmFeedback(result.accuracy),
      pointsEarned: result.passed ? 15 : 5
    };
  }

  getHint(exerciseId: string): string {
    return this.rhythmTrainerAPI.provideRhythmClue(exerciseId);
  }

  getProgress(userId: string): Progress {
    const playerData = this.rhythmTrainerAPI.getPlayerProgress(userId);
    return {
      userId: playerData.playerId,
      totalExercises: playerData.rhythmExercises + 15,
      completedExercises: playerData.rhythmExercises,
      correctAnswers: Math.floor(playerData.rhythmExercises * (playerData.averageAccuracy / 100)),
      totalPoints: playerData.totalPoints,
      level: this.calculateLevelFromRank(playerData.rank),
      currentStreak: Math.floor(Math.random() * 5),
      longestStreak: Math.floor(Math.random() * 10),
      achievements: ['Ritmo no Sangue', 'Mestre do Tempo']
    };
  }

  private mapDifficultyToComplexity(difficulty: string): string {
    const complexityMap: { [key: string]: string } = {
      'beginner': 'simple',
      'intermediate': 'moderate', 
      'advanced': 'complex'
    };
    return complexityMap[difficulty] || 'simple';
  }

  private generateRhythmFeedback(accuracy: number): string {
    if (accuracy >= 90) return '🎵 Perfeito! Seu timing está excelente!';
    if (accuracy >= 70) return '👍 Bom trabalho! Continue praticando.';
    if (accuracy >= 50) return '⏱️ Você está no caminho certo. Foque no tempo.';
    return '🎯 Continue praticando! Use o metrônomo.';
  }

  private calculateLevelFromRank(rank: string): number {
    const rankLevels: { [key: string]: number } = {
      'Novice': 1, 'Apprentice': 2, 'Intermediate': 3, 'Advanced': 4, 'Expert': 5
    };
    return rankLevels[rank] || 1;
  }
}