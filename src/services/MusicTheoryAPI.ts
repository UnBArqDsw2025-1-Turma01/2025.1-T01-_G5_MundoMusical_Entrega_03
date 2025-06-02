// Simulação de uma API externa de teoria musical (Adaptee)
export interface IntervalExercise {
  exerciseId: string;
  intervalType: string;
  note1: string;
  note2: string;
  difficultyLevel: number;
  maxScore: number;
}

export interface UserStats {
  userId: string;
  exercisesCompleted: number;
  correctAnswers: number;
  totalScore: number;
  currentLevel: number;
}

export class MusicTheoryAPI {
  // Simula buscar exercício de intervalos
  fetchIntervalExercise(level: number): IntervalExercise {
    const intervals = [
      { type: 'Segunda Maior', note1: 'C', note2: 'D' },
      { type: 'Terça Maior', note1: 'C', note2: 'E' },
      { type: 'Quinta Justa', note1: 'C', note2: 'G' },
      { type: 'Oitava', note1: 'C', note2: 'C' }
    ];
    
    const randomInterval = intervals[Math.floor(Math.random() * intervals.length)];
    
    return {
      exerciseId: `interval_${Date.now()}`,
      intervalType: randomInterval.type,
      note1: randomInterval.note1,
      note2: randomInterval.note2,
      difficultyLevel: level,
      maxScore: level * 10
    };
  }

  // Simula verificação de resposta
  checkIntervalAnswer(id: string, interval: string): boolean {
    // Simulação simples - aceita algumas respostas corretas
    const correctAnswers = ['Terça Maior', 'Segunda Maior', 'Quinta Justa', 'Oitava'];
    return correctAnswers.includes(interval);
  }

  // Simula dica
  getIntervalHint(exerciseId: string): string {
    const hints = [
      'Conte os semitons entre as notas',
      'Lembre-se: Terça Maior tem 4 semitons',
      'A Quinta Justa é muito estável',
      'Ouça atentamente a distância entre as notas'
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  }

  // Simula estatísticas do usuário
  getUserStats(userId: string): UserStats {
    return {
      userId,
      exercisesCompleted: Math.floor(Math.random() * 50) + 10,
      correctAnswers: Math.floor(Math.random() * 30) + 5,
      totalScore: Math.floor(Math.random() * 500) + 100,
      currentLevel: Math.floor(Math.random() * 5) + 1
    };
  }
}