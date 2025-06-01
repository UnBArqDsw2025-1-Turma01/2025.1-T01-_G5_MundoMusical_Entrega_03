import { LessonView } from "@/components/lesson/LessonView";
import { DailyReward } from "@/components/rewards/DailyRewards";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('Logout realizado com sucesso!');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mundo Musical 🎶</h1>
        <Button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
        >
          Logout
        </Button>
      </div>

      <LessonView />
      <DailyReward />
    </main>
  );
}
