interface CorrecaoExercicio {
    corrigir (nota: Number);
    gerarFeedback(idFeedback: Number, comentario: String) : Feedback;
}

class ProxyExercicio implements CorrecaoExercicio{
    private exercicio: Exercicio;

    private negarSecao: boolean = false;
    
    constructor(exercicio : Exercicio) {
        this.exercicio = exercicio;
    }

    corrigir(nota: Number) {
        if (this.checkarSessao()) {
            this.exercicio.corrigir(nota);
            return;
        }
        throw Error("Não foi possivel verificar a seção");
    }

    gerarFeedback(idFeedback: Number, comentario: String) : Feedback{
        if(this.checkarSessao()){
            return this.exercicio.gerarFeedback(idFeedback, comentario);
        }
        throw Error("Não foi possivel verificar a seção");
    }

    private checkarSessao() : boolean {
        // spoof
        return !this.negarSecao;
    }

    public debugNegarSecao(valor : boolean){
        this.negarSecao = valor;
    }
}

class Exercicio implements CorrecaoExercicio {
    private idExercicio: Number;
    private idAutor: Number;  
    private pontuacao: Number;
    private dificuldade: Number;

    constructor(idExercicio, idAutor, dificuldade){
        this.idExercicio = idExercicio;
        this.idAutor = idAutor;
        this.pontuacao = 0;
        this.dificuldade = dificuldade;
    }
    
    corrigir (nota){
        //spoof
        this.pontuacao = nota;
        return true;
    }
    
    gerarFeedback (idFeedback, comentario) : Feedback {
        // spoof
        return new Feedback(idFeedback, this.idExercicio, this.pontuacao, comentario);
    }

    getPontuacao(){
        return this.pontuacao;
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

    constructor(idFeedback: Number, idExercicio: Number, pontuacao: Number, comentario: String){
        this.idFeedback = idFeedback;
        this.idExercicio = idExercicio;
        this.pontuacao = pontuacao;
        this.comentario = comentario;
    }
}


class TesteCorrecao {
    exercicio = new Exercicio(300, 5000, 3);
    
    testar(){
        //simulando correção automática do exercicio
        (this.exercicio as CorrecaoExercicio).corrigir(60);

        console.log("Pontuacao automática do exercício: " + this.exercicio.getPontuacao());

        // Superscrição do professor
        let correcao = new ProxyExercicio(this.exercicio);

        correcao.corrigir(80);

        console.log("Pontuacao após correção do professor: " + this.exercicio.getPontuacao());

        // teste com seção inválida:
        console.log("Tentativa de correcao com seção inválida: ");

        correcao.debugNegarSecao(true);
        try {
            correcao.corrigir(100);
        } catch (e) {
            console.log(e);
        }
        console.log("Pontuação: " + this.exercicio.getPontuacao());
        
    }
}

let teste2 = new TesteCorrecao();
teste2.testar();

// class Quiz extends Exercicio {
//     tema;
//     resposta;

//     inserirQuestao () {

//     }

//     excluirQuestao () {

//     }

//     editarQuestao () {

//     }

//     compararRespostas (resposta) {

//     }

//     gerarAlternativas (tema) {

//     }


// }

// class ReconhecimentoDeAudio extends Exercicio {
//     partitura;
//     resposta;

//     compararRespostas (resposta) {

//     }
    

// }

// class LeituraDePartituras extends Exercicio {
//     partitura;
//     resposta;

//     compararRespostas (resposta) {

//     }
    

// }


// class DesafioDeRitmo extends Exercicio {
//     precisao;
//     partitura;

//     gerarNotas () {

//     }
//     compararCliques () {

//     }
    

// }