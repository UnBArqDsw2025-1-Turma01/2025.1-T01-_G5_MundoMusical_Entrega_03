// src/services/ChordProgressionAPI.ts
export interface ChordExercise {
  exerciseId: string;
  key: string;
  chordSequence: string[];
  midiFile: string;
  difficulty: string;
  points: number;
}

export interface Assessment {
  correct: boolean;
  score: number;
  feedback: string;
  correctSequence: string[];
}

export interface Metrics {
  userId: string;
  chordExercises: number;
  successRate: number;
  points: number;
  level: number;
  certifications: string[];
}

export class ChordProgressionAPI {
  private endpoint: string;
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.endpoint = 'https://chordprogression.api.com/v1';
  }

  async createChordExercise(key: string, difficulty: string): Promise<ChordExercise> {
    const response = await fetch(`${this.endpoint}/exercises/chord`, {
      method: 'POST',
      headers: {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key, difficulty })
    });

    return await response.json();
  }

  async assessChordAnswer(exerciseId: string, chords: string[]): Promise<Assessment> {
    const response = await fetch(`${this.endpoint}/exercises/${exerciseId}/assess`, {
      method: 'POST',
      headers: {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chords })
    });

    return await response.json();
  }

  async getChordHint(exerciseId: string): Promise<string> {
    const response = await fetch(`${this.endpoint}/exercises/${exerciseId}/hint`, {
      headers: {
        'X-API-Key': this.apiKey
      }
    });

    const result = await response.json();
    return result.hint;
  }

  async fetchUserMetrics(userId: string): Promise<Metrics> {
    const response = await fetch(`${this.endpoint}/users/${userId}/metrics`, {
      headers: {
        'X-API-Key': this.apiKey
      }
    });

    return await response.json();
  }
}