import type { IAuthObserver } from './IAuthObserver';
import { CompositeObserver } from './CompositeObserver';

class AuthSubject {
  private static instance: AuthSubject;
  private observers = new CompositeObserver();
  private isAuth = false
  private currentUser: string | null = null;

  private constructor() {}

  public static getInstance(): AuthSubject {
    if (!AuthSubject.instance) {
      AuthSubject.instance = new AuthSubject();
    }
    return AuthSubject.instance;
  }

  subscribe(observer: IAuthObserver): void {
    this.observers.add(observer);
    observer.update(this.isAuth);
  }

  unsubscribe(observer: IAuthObserver): void {
    this.observers.remove(observer);
  }

  clearAllObservers(): void {
    this.observers.clear();
  }

  private notify(): void {
    this.observers.update(this.isAuth);
  }

  private validarCredenciais(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === 'admin') {
      return true;
    }
    return false
  }

  loginUser(usuario: string, senha: string): boolean {
    if (this.validarCredenciais(usuario, senha)) {
      this.isAuth = true;
      this.currentUser = usuario;
      this.notify();
      return true;
    }
    return false;
  }

  logout(): void {
    if (this.isAuth) {
      this.isAuth = false;
      this.currentUser = null;
      this.notify();
    }
  }

  getAuthStatus(): boolean {
    return this.isAuth;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}

export const authSubject = AuthSubject.getInstance();
