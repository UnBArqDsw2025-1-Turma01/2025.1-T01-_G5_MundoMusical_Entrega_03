// Objeto protótipo
const exercicioBase = {
  titulo: "Identifique o acorde",
  tipo: "Audição",
  dificuldade: "Média",
  conteudo: ["Áudio de acorde", "Alternativas múltiplas"],
  clone() {
    return { ...this }; // Cria uma cópia superficial do objeto
  }
};

// Clonando o exercício para customizar
const novoExercicio = exercicioBase.clone();
novoExercicio.titulo = "Identifique o acorde maior";
novoExercicio.dificuldade = "Fácil";

// Exibindo os objetos
console.log("Original:", exercicioBase);
console.log("Clone:", novoExercicio);