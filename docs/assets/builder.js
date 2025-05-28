class Partitura {
    constructor(notas){
        this.notas = notas;
        this.compasso = new compasso(4, 4);
        this.tempo = 60;
        this.clave = Claves.SOL;
        this.proxPartitura = null;
        this.escala = Escala.DOMAIOR
        this.repeticoes = 0;
        this.dinamica = Dinamicas.NONE;
    }

    setCompasso(compasso){
        this.compasso = compasso;
        return this;
    }

    setTempo(tempo){
        this.tempo = tempo;
        return this;
    }

    setClave(clave){
        this.clave = clave;
        return this;
    }

    concatenate(proxPartitura){
        this.proxPartitura = proxPartitura;
        return this;
    }

    setEscala(escala){
        this.escala = escala;
        return this;
    }

    repetir(vezes){
        this.repeticoes = vezes;
        return this;
    }

    setDinamica(dinamica){
        this.dinamica = dinamica;
        return this;
    }

    build() {
        if(this.notas.lenght = 0){
            throw Error("Partitura criada sem notas");
        }
        return this;
    }

}