interface Props {
  level: number;
  xp: number;
  total?: number;
}

export const UserProgress = ({ level, xp, total = 100 }: Props) => {
  const percent = (xp / total) * 100;

  return (
    <div className="space-y-2 mb-6">
      <div className="flex justify-between text-sm font-medium">
        <span>Seu progresso</span>
        <span>Nível {level}</span>
      </div>
      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full bg-sky-500 transition-all" style={{ width: `${percent}%` }} />
      </div>
      <div className="text-xs text-muted-foreground">{xp}/{total} XP</div>
    </div>
  );
};
