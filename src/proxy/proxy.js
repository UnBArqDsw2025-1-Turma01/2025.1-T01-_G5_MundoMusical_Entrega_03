var ProxyExercicio = /** @class */ (function () {
    function ProxyExercicio(exercicio) {
        this.negarSecao = false;
        this.exercicio = exercicio;
    }
    ProxyExercicio.prototype.corrigir = function (nota) {
        if (this.checkarSessao()) {
            this.exercicio.corrigir(nota);
            return;
        }
        throw Error("Não foi possivel verificar a seção");
    };
    ProxyExercicio.prototype.gerarFeedback = function (idFeedback, comentario) {
        if (this.checkarSessao()) {
            return this.exercicio.gerarFeedback(idFeedback, comentario);
        }
        throw Error("Não foi possivel verificar a seção");
    };
    ProxyExercicio.prototype.checkarSessao = function () {
        // spoof
        return !this.negarSecao;
    };
    ProxyExercicio.prototype.debugNegarSecao = function (valor) {
        this.negarSecao = valor;
    };
    return ProxyExercicio;
}());
var Exercicio = /** @class */ (function () {
    function Exercicio(idExercicio, idAutor, dificuldade) {
        this.idExercicio = idExercicio;
        this.idAutor = idAutor;
        this.pontuacao = 0;
        this.dificuldade = dificuldade;
    }
    Exercicio.prototype.corrigir = function (nota) {
        //spoof
        this.pontuacao = nota;
        return true;
    };
    Exercicio.prototype.gerarFeedback = function (idFeedback, comentario) {
        // spoof
        return new Feedback(idFeedback, this.idExercicio, this.pontuacao, comentario);
    };
    Exercicio.prototype.getPontuacao = function () {
        return this.pontuacao;
    };
    return Exercicio;
}());
var Feedback = /** @class */ (function () {
    function Feedback(idFeedback, idExercicio, pontuacao, comentario) {
        this.idFeedback = idFeedback;
        this.idExercicio = idExercicio;
        this.pontuacao = pontuacao;
        this.comentario = comentario;
    }
    return Feedback;
}());
var TesteCorrecao = /** @class */ (function () {
    function TesteCorrecao() {
        this.exercicio = new Exercicio(300, 5000, 3);
    }
    TesteCorrecao.prototype.testar = function () {
        //simulando correção automática do exercicio
        this.exercicio.corrigir(60);
        console.log("Pontuacao automática do exercício: " + this.exercicio.getPontuacao());
        // Superscrição do professor
        var correcao = new ProxyExercicio(this.exercicio);
        correcao.corrigir(80);
        console.log("Pontuacao após correção do professor: " + this.exercicio.getPontuacao());
        // teste com seção inválida:
        console.log("Tentativa de correcao com seção inválida: ");
        correcao.debugNegarSecao(true);
        try {
            correcao.corrigir(100);
        }
        catch (e) {
            console.log(e);
        }
        console.log("Pontuação: " + this.exercicio.getPontuacao());
    };
    return TesteCorrecao;
}());
var teste2 = new TesteCorrecao();
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
