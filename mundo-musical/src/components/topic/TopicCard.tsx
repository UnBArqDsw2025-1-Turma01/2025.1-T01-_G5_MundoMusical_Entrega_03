import type { Topic } from "@/core/topics/topicInterface";

export const TopicCard = ({ topic }: { topic: Topic }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 space-y-2 hover:shadow-md transition">
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full"
        style={{ backgroundColor: `${topic.color}33` }} // cor com opacidade
      >
        <div style={{ color: topic.color }}>{topic.icon}</div>
      </div>
      <h3 className="font-semibold text-base">{topic.title}</h3>
      <p className="text-sm text-muted-foreground">
        Lição {topic.lessonsCompleted} de {topic.totalLessons}
      </p>
      <p className="text-xs text-muted-foreground">Capítulo {topic.chapter}</p>
    </div>
  );
};
