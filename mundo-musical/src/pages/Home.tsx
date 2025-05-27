import { LessonView } from "@/components/lesson/LessonView";
import { DailyReward } from "@/components/rewards/DailyRewards";

export const Home = () => {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Mundo Musical 🎶</h1>
      <LessonView />
      <DailyReward />
    </main>
  );
}