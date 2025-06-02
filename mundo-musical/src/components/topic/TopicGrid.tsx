import { TopicCard } from "./TopicCard";
import type { Topic } from "@/core/topics/topicInterface";
import {
  Music2,
  AudioLines,
  Drum,
  BookOpen,
  Waves,
  TimerReset,
} from "lucide-react";
import { useNavigate } from "react-router";

export const TopicGrid = () => {
  const navigate = useNavigate()
  const topics: Topic[] = [
    {
      title: "Leitura de partitura",
      lessonsCompleted: 2,
      totalLessons: 7,
      chapter: 5,
      color: "#a78bfa",
      icon: <BookOpen size={20} />,
    },
    {
      title: "Ritmo",
      lessonsCompleted: 1,
      totalLessons: 4,
      chapter: 3,
      color: "#6ee7b7",
      icon: <Drum size={20} />,
    },
    {
      title: "Acordes",
      lessonsCompleted: 5,
      totalLessons: 5,
      chapter: 3,
      color: "#93c5fd",
      icon: <Music2 size={20} />,
    },
    {
      title: "Treinamento auditivo",
      lessonsCompleted: 2,
      totalLessons: 10,
      chapter: 2,
      color: "#f9a8d4",
      icon: <AudioLines size={20} />,
    },
    {
      title: "Escalas",
      lessonsCompleted: 2,
      totalLessons: 3,
      chapter: 1,
      color: "#fca5a5",
      icon: <Waves size={20} />,
    },
    {
      title: "Intervalos",
      lessonsCompleted: 1,
      totalLessons: 2,
      chapter: 1,
      color: "#a3e635",
      icon: <TimerReset size={20} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      {topics.map((topic, idx) => (
        <div onClick={() => navigate(`/topics/${topic.title}`)}>
          <TopicCard key={idx} topic={topic} />
        </div>
      ))}
    </div>
  );
};
