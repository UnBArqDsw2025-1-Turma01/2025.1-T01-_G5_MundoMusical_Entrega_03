export class UserProgress {
  private static instance: UserProgress;
  private completedLessons = 0;

  private constructor() {}

  public static getInstance(): UserProgress {
    if (!UserProgress.instance) {
      UserProgress.instance = new UserProgress();
    }
    return UserProgress.instance;
  }

  public completeLesson() {
    this.completedLessons++;
  }

  public getProgress(): number {
    return this.completedLessons;
  }
}
