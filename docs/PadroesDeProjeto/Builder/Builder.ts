class Partitura {
    notas : Nota[];
    compasso : Compasso;
    tempo : Number;
    clave : Clave;
    proxPartitura: Partitura | null;
    escala: Escala;
    repeticoes : Number;


    constructor(notas: Nota[]) {
        this.notas = notas;
        this.compasso = new Compasso(4, 4);
        this.tempo = 60;
        this.clave = Clave.SOL;
        this.proxPartitura = null;
        this.escala = Escala.DOMAIOR
        this.repeticoes = 0;
        // this.dinamica = Dinamica.NONE;
    }

    setCompasso(compasso: Compasso) {
        this.compasso = compasso;
        return this;
    }

    setTempo(tempo: Number){
        this.tempo = tempo;
        return this;
    }

    setClave(clave: Clave){
        this.clave = clave;
        return this;
    }

    concatenate(proxPartitura: Partitura) {
        this.proxPartitura = proxPartitura;
        return this;
    }

    setEscala(escala: Escala) {
        this.escala = escala;
        return this;
    }

    repetir(vezes: Number) {
        this.repeticoes = vezes;
        return this;
    }

    /*
    setDinamica(dinamica){
        this.dinamica = dinamica;
        return this;
    }
    */
    build () {
        if (this.notas.length = 0) {
            throw Error("Partitura criada sem notas");
        }
        return this;
    }
}

class Nota {

}

class Compasso {
    numerador : Number;
    denominador: Number;
    constructor(numerador: Number, denominador: Number) {
        this.numerador = numerador;
        this.denominador = denominador;
    }
}

enum Clave {
    SOL,
    FA
}

enum Escala {
    DOMAIOR
}