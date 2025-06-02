export type Concluido = () => void;

export interface Subject {
  subscribe(observer: Concluido): void;
  unsubscribe(observer: Concluido): void;
  notify(): void;
}
