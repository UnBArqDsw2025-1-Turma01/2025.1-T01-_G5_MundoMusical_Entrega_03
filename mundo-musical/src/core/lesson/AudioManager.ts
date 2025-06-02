export class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement;
  private isLoaded = false;


  private constructor() {
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.volume = 1; 
  }


  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }


  public load(sourceUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.audio.src === sourceUrl && this.isLoaded) {
        return resolve();
      }

      this.isLoaded = false;
      this.audio.src = sourceUrl;
      this.audio.load();

      const onCanPlay = () => {
        this.isLoaded = true;
        this.audio.removeEventListener('canplaythrough', onCanPlay);
        resolve();
      };
      const onError = (e: any) => {
        this.audio.removeEventListener('error', onError);
        reject(new Error(`Falha ao carregar áudio: ${e}`));
      };

      this.audio.addEventListener('canplaythrough', onCanPlay);
      this.audio.addEventListener('error', onError);
    });
  }

  public async play(sourceUrl?: string): Promise<void> {
    if (sourceUrl) {
      await this.load(sourceUrl);
    } else if (!this.isLoaded) {
      return Promise.reject(new Error('Áudio não carregado'));
    }

    try {
      await this.audio.play();
    } catch (err) {
      console.warn('AudioManager: erro ao dar play:', err);
    }
  }

  public pause(): void {
    if (!this.audio.paused) {
      this.audio.pause();
    }
  }


  public stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }


  public setVolume(volume: number): void {
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }

  public isPlaying(): boolean {
    return !this.audio.paused && !this.audio.ended;
  }
}
