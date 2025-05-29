interface CorrecaoExercicio {
    corrigir (nota) : boolean;

    gerarFeedback(idFeedback, comentario) : Feedback | null;
}

class ProxyExercicio implements CorrecaoExercicio{
    private exercicio: Exercicio;
    

    constructor(exercicio : Exercicio){
        this.exercicio = exercicio;
    }

    corrigir(nota: any) : boolean {
        if(this.checkarSessao()){
            return this.exercicio.corrigir(nota);
        }
        return false;
    }

    gerarFeedback(idFeedback, comentario) : Feedback | null{
        if(this.checkarSessao()){
            return this.exercicio.gerarFeedback(idFeedback, comentario);
        }
        return null;
    }

    private checkarSessao() : boolean {
        // spoof
        return true;
    }
}

class Exercicio implements CorrecaoExercicio {
    private idExercicio: Number;
    private autor: Number;  
    private pontuacao: Number;
    private dificuldade: Number;
    
    corrigir (nota) : boolean{
        //spoof
        this.pontuacao = nota;
        return true;
    }
    
    gerarFeedback (idFeedback, comentario) : Feedback | null {
         // spoof
         return new Feedback(idFeedback, this.idExercicio, this.pontuacao, comentario)
    }

    // resto da implementacao do Exercício
}

class Feedback {
    private idFeedback: Number;
    private idExercicio: Number;
    private codigoAluno: Number;
    private data: String;
    private mensagem: String;
    private comentario: String;
    private pontuacao: Number;

    constructor(idFeedback, idExercicio, pontuacao, comentario){
        this.idFeedback = idFeedback;
        this.idExercicio = idExercicio;
        this.pontuacao = pontuacao;
        this.comentario = comentario;
    }
}

class Quiz extends Exercicio {
    tema;
    resposta;

    inserirQuestao () {

    }

    excluirQuestao () {

    }

    editarQuestao () {

    }

    compararRespostas (resposta) {

    }

    gerarAlternativas (tema) {

    }


}

class ReconhecimentoDeAudio extends Exercicio {
    partitura;
    resposta;

    compararRespostas (resposta) {

    }
    

}

class LeituraDePartituras extends Exercicio {
    partitura;
    resposta;

    compararRespostas (resposta) {

    }
    

}


class DesafioDeRitmo extends Exercicio {
    precisao;
    partitura;

    gerarNotas () {

    }
    compararCliques () {

    }
    

}