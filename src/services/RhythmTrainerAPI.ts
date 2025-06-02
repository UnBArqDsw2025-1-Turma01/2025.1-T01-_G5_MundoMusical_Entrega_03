// Simulação de uma API externa de ritmo (Adaptee)
export interface RhythmPattern {
  patternId: string;
  beats: number[];
  tempo: number;
  timeSignature: string;
  complexity: string;
  scoreValue: number;
}

export interface PlayerData {
  playerId: string;
  rhythmExercises: number;
  averageAccuracy: number;
  totalPoints: number;
  rank: string;
}

export class RhythmTrainerAPI {
  generateRhythmPattern(complexity: string): RhythmPattern {
    const patterns = [
      { beats: [1, 0, 1, 0], name: 'Básico' },
      { beats: [1, 0, 1, 1], name: 'Sincopado' },
      { beats: [1, 1, 0, 1], name: 'Complexo' }
    ];
    
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    
    return {
      patternId: `rhythm_${Date.now()}`,
      beats: randomPattern.beats,
      tempo: 120,
      timeSignature: '4/4',
      complexity,
      scoreValue: complexity === 'simple' ? 10 : complexity === 'moderate' ? 15 : 20
    };
  }

  validateRhythmInput(patternId: string, userInput: number[]): { accuracy: number; passed: boolean } {
    const accuracy = Math.random() * 100; 
    return {
      accuracy,
      passed: accuracy > 70
    };
  }

  provideRhythmClue(patternId: string): string {
    const clues = [
      'Mantenha o tempo constante',
      'Conte: 1, 2, 3, 4',
      'Use um metrônomo mental',
      'Sinta a pulsação'
    ];
    return clues[Math.floor(Math.random() * clues.length)];
  }

  getPlayerProgress(playerId: string): PlayerData {
    const ranks = ['Novice', 'Apprentice', 'Intermediate', 'Advanced', 'Expert'];
    return {
      playerId,
      rhythmExercises: Math.floor(Math.random() * 30) + 5,
      averageAccuracy: Math.random() * 40 + 60, // 60-100%
      totalPoints: Math.floor(Math.random() * 300) + 50,
      rank: ranks[Math.floor(Math.random() * ranks.length)]
    };
  }
}