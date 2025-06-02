import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from "react";
import { DailyMissions } from "@/components/user/DailyMissions";
import { UserProgress } from "@/components/user/UserProgress";
import { DailyMissionManager } from "@/core/missions/DailyMissionManager";
import { setupMissions } from "@/lib/setupMissions";
import { TopicGrid } from "@/components/topic/TopicGrid";
import type { Mission } from "@/core/missions/Mission";

export const Home = () => {
  const navigate = useNavigate();
  const [missions, setMissions] = useState<Mission[]>([]);
  const manager = useMemo(() => new DailyMissionManager(missions), [missions]) 

  useEffect(() => {
    const newMissions = setupMissions();
    setMissions(newMissions);
    manager.setMissions(newMissions);
  }, []);

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

      <UserProgress level={manager.getLevel()} xp={manager.getXp()} />
      <DailyMissions missions={manager.getMissions()} />
      <TopicGrid />
    </main>
  );
}
