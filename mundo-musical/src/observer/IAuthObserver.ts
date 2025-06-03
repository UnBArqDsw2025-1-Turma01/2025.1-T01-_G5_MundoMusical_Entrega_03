export interface IAuthObserver {
  update(isAuthenticated: boolean): void;
}
