import { LessonView } from "@/components/lesson/LessonView";
import { DailyReward } from "@/components/rewards/DailyRewards";
import HomeMenu from "@/components/HomeMenu";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow max-w-2xl mx-auto px-4 py-10 pb-16">
        <h1 className="text-3xl font-bold mb-6">Mundo Musical 🎶</h1>
        <LessonView />
        <DailyReward />
      </main>
      <HomeMenu />
    </div>
  );
};

export default Home;
