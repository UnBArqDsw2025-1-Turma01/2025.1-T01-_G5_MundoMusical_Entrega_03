class Exercicio2 {
    private idExercicio: Number;
    private autor: Number;  
    private pontuacao: Number;
    private dificuldade: Number;

    private contexto = new ContextoExercicio(new ExercicioNaoFeito());
}


interface EstadoExercicio {
    iniciar();
    completar();
}

class ExercicioNaoFeito implements EstadoExercicio {
    iniciar () {
        return new ExercicioEmExecucao();
    }
    completar() {
        return new ExercicioFeito();
    }
}

class ExercicioEmExecucao implements EstadoExercicio {
    iniciar () {
        throw Error("Exercício já em execução");
    }
    completar () {
        return new ExercicioFeito();   
    }
}

class ExercicioFeito implements EstadoExercicio {
    iniciar() {
        return new ExercicioEmExecucao ();
    }

    completar(){
        throw Error("Exercício já realizado");
    }
}

class ContextoExercicio {
    private estado : EstadoExercicio;

    constructor (estado: EstadoExercicio) {
        this.estado = estado;
    }

    iniciar() {
        this.estado = this.estado.iniciar();
    }

    completar() {
        this.estado = this.estado.completar();
    }

}