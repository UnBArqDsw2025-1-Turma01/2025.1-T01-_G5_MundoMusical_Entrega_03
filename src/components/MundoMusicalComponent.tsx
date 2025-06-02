import React, { useEffect, useState } from "react";
import { MusicTheoryAdapter } from "../adapters/MusicTheoryAdapter";
import { RhythmTrainerAdapter } from "../adapters/RhythmTrainerAdapter";
import { EvaluationResult, Exercise, Progress } from "../interfaces/MusicExerciseInterface";
import { MundoMusicalLearningSystem } from "./MundoMusicalLearningSystem";

type ExerciseProvider = "theory" | "rhythm";
type Difficulty = "beginner" | "intermediate" | "advanced";

export const MundoMusicalComponent: React.FC = () => {
  const [learningSystem, setLearningSystem] = useState<MundoMusicalLearningSystem | null>(null);
  const [currentProvider, setCurrentProvider] = useState<ExerciseProvider>("theory");
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [lastResult, setLastResult] = useState<EvaluationResult | null>(null);
  const [userProgress, setUserProgress] = useState<Progress | null>(null);
  const [hint, setHint] = useState<string>("");
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    initializeLearningSystem(currentProvider);
    // eslint-disable-next-line
  }, [currentProvider]);

  const initializeLearningSystem = (provider: ExerciseProvider) => {
    let adapter;
    switch (provider) {
      case "theory":
        adapter = new MusicTheoryAdapter();
        break;
      case "rhythm":
        adapter = new RhythmTrainerAdapter();
        break;
      default:
        adapter = new MusicTheoryAdapter();
    }
    setLearningSystem(new MundoMusicalLearningSystem(adapter));
    setCurrentExercise(null);
    setLastResult(null);
    setShowHint(false);
  };

  const startNewExercise = () => {
    if (!learningSystem) return;
    try {
      const exercise = learningSystem.startExercise(difficulty, currentProvider);
      setCurrentExercise(exercise);
      setUserAnswer("");
      setLastResult(null);
      setShowHint(false);
      setHint("");
    } catch (error) {
      console.error("Erro ao carregar exercício:", error);
    }
  };

  const submitAnswer = () => {
    if (!learningSystem || !currentExercise || !userAnswer.trim()) return;
    try {
      const result = learningSystem.submitAnswer(currentExercise.id, userAnswer);
      setLastResult(result);
      const progress = learningSystem.checkUserProgress("user123");
      setUserProgress(progress);
    } catch (error) {
      console.error("Erro ao avaliar resposta:", error);
    }
  };

  const getHint = () => {
    if (!learningSystem || !currentExercise) return;
    try {
      const hintText = learningSystem.requestHint(currentExercise.id);
      setHint(hintText);
      setShowHint(true);
    } catch (error) {
      console.error("Erro ao buscar dica:", error);
    }
  };

  const getProviderDisplayName = (provider: ExerciseProvider): string => {
    return provider === "theory" ? "Teoria Musical" : "Treinamento Rítmico";
  };

  const getDifficultyColor = (diff: Difficulty): string => {
    const colors: Record<Difficulty, string> = {
      beginner: "bg-green-100 text-green-800",
      intermediate: "bg-yellow-100 text-yellow-800",
      advanced: "bg-red-100 text-red-800",
    };
    return colors[diff];
  };

  return (
    <div className="container max-w-2xl mx-auto py-8">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h1 className="text-3xl text-center font-bold">🎵 Mundo Musical</h1>
          <p className="text-center text-gray-500">
            Plataforma gamificada de teoria musical usando Adapter Pattern
          </p>
        </div>
        <div className="border-t my-4" />
        {/* Progresso do Usuário */}
        {userProgress && (
          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800">
              Nível: {userProgress.level}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-800">
              Pontos: {userProgress.totalPoints}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800">
              Exercícios: {userProgress.completedExercises}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-100 text-orange-800">
              Acertos: {userProgress.correctAnswers}
            </span>
          </div>
        )}

        {/* Seletores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Exercício</label>
            <div className="flex gap-2 mt-2">
              {(["theory", "rhythm"] as ExerciseProvider[]).map((provider) => (
                <button
                  key={provider}
                  className={`flex-1 px-4 py-2 rounded ${currentProvider === provider
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setCurrentProvider(provider)}
                >
                  {getProviderDisplayName(provider)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dificuldade</label>
            <div className="flex gap-2 mt-2">
              {(["beginner", "intermediate", "advanced"] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  className={`flex-1 px-4 py-2 rounded ${difficulty === diff
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                  onClick={() => setDifficulty(diff)}
                >
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button
          className="w-full mb-6 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          onClick={startNewExercise}
        >
          🚀 Novo Exercício
        </button>

        {/* Exercício Atual */}
        {currentExercise && (
          <div className="mb-6 bg-gray-50 rounded-lg shadow p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold">{currentExercise.title}</span>
              <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getDifficultyColor(currentExercise.difficulty)}`}>
                {currentExercise.difficulty}
              </span>
            </div>
            <p className="mb-2">{currentExercise.description}</p>
            <div className="mb-4">
              <strong>Pergunta:</strong> {currentExercise.question}
            </div>
            {currentExercise.options && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {currentExercise.options.map((option, idx) => (
                  <button
                    key={idx}
                    className={`w-full px-4 py-2 rounded ${userAnswer === option
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                    onClick={() => setUserAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                onClick={submitAnswer}
                disabled={!userAnswer.trim()}
              >
                ✓ Enviar Resposta
              </button>
              <button
                className="px-4 py-2 rounded bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition"
                onClick={getHint}
              >
                💡 Dica
              </button>
            </div>
            {showHint && hint && (
              <div className="mt-4 p-3 rounded bg-yellow-50 border-l-4 border-yellow-400">
                <strong>Dica:</strong> {hint}
              </div>
            )}
          </div>
        )}

        {/* Resultado */}
        {lastResult && (
          <div className={`mb-6 rounded-lg shadow p-4 ${lastResult.isCorrect ? "bg-green-50" : "bg-red-50"}`}>
            <div className="font-bold text-lg mb-2">
              {lastResult.isCorrect ? "🎉 Correto!" : "❌ Incorreto"}
            </div>
            <div className="mb-2">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800">
                {lastResult.score}% | +{lastResult.pointsEarned} pontos
              </span>
            </div>
            <div>{lastResult.feedback}</div>
            {lastResult.correctAnswer && !lastResult.isCorrect && (
              <div className="mt-2">
                <strong>Resposta Correta:</strong> {lastResult.correctAnswer}
              </div>
            )}
          </div>
        )}

        {/* Estado Vazio */}
        {!currentExercise && (
          <div className="text-center py-8">
            <div className="text-5xl mb-2">🎵</div>
            <div className="text-lg text-gray-500">
              Selecione um tipo de exercício e dificuldade, depois clique em "Novo Exercício"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};