class Partitura {
    notas : Nota[] | null;
    compasso : Compasso;
    tempo : Number;
    clave : Clave;
    proxPartitura: Partitura | null;
    escala: Escala;
    repeticoes : Number;


    constructor(notas: Nota[] | null) {
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
        // Suprimido para teste
        // if (this.notas.length = 0) {
        //     throw Error("Partitura criada sem notas");
        // }
        return this;
    }

    toString() : string {
        let str = "qtde notas: " + ((this.notas != null) ? (this.notas?.length) : 0)
        + ", clave: " + this.clave 
        + ", tempo: " + this.tempo 
        + ", compasso: " + this.compasso.toString()
        + ", escala: " + this.escala 
        + ", ritornelos: " + this.repeticoes 
        + ", tem próxima:" + (this.proxPartitura != null);

        return str;
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

    toString() : string{
        return this.numerador + "/" + this.denominador;
    }
}

enum Clave {
    SOL = "Sol",
    FA = "Fá"

}

enum Escala {
    DOMAIOR = "Do Maior",
    REMENOR = "Re Menor",
    SOLMAIOR = "Sol Maior",
    PENTATONICAFASUS = "Pentatônica Fa#"
}


class Teste{
    // Para facilitar os testes, foi permitido que partituras sejam criadas sem notas

    partitura0 = new Partitura(null);
    partitura1 = new Partitura(null).setTempo(120).setClave(Clave.FA).setEscala(Escala.REMENOR);
    partitura2 = new Partitura(null).concatenate(this.partitura1).setCompasso(new Compasso(3, 4)).setTempo(120).setClave(Clave.FA).setEscala(Escala.REMENOR);
    partitura3 = new Partitura(null).setEscala(Escala.PENTATONICAFASUS).repetir(2).setCompasso(new Compasso(5,4));

    testar(){
        console.log(this.partitura0.toString());
        console.log(this.partitura1.toString());
        console.log(this.partitura2.toString());
        console.log(this.partitura3.toString());
    }
}
let teste = new Teste();
teste.testar();