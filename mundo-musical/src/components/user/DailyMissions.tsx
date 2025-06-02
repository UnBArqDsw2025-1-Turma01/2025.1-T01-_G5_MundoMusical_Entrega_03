import type { Mission } from "@/core/missions/Mission";

export const DailyMissions = ({ missions }: { missions: Mission[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
      {missions.map((mission, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="text-yellow-500">{mission.icon}</div>
            <div className="text-sky-500 font-semibold">+{mission.xp} XP</div>
          </div>
          <div className="text-sm font-medium">{mission.title}</div>
          <div className="h-2 rounded-full bg-gray-200 w-full overflow-hidden">
            <div
              className="h-full bg-sky-500 transition-all"
              style={{ width: `${mission.getProgress() * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
