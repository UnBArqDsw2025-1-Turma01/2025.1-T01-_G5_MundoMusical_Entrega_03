class Exercicio {
    idExercicio;
    autor;  
    ponntuacao;
    dificuldade;

    aplicar () {

    }
    
    corrigir () {

    }
    
    somarAcertosErros () {

    }
    
    gerarFeedback (idFeedcak, idExercicio) {
               
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
    
    corrigir () {

    }

}

class ReconhecimentoDeAudio extends Exercicio {
    partitura;
    resposta;

    compararRespostas (resposta) {

    }
    
    corrigir () {

    }

}

class LeituraDePartituras extends Exercicio {
    partitura;
    resposta;

    compararRespostas (resposta) {

    }
    
    corrigir () {

    }

}


class DesafioDeRitmo extends Exercicio {
    precisao;
    partitura;

    gerarNotas () {

    }
    compararCliques () {

    }
    
    corrigir () {

    }

}