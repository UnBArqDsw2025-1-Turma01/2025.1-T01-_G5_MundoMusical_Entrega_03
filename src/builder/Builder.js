var Partitura = /** @class */ (function () {
    function Partitura(notas) {
        this.notas = notas;
        this.compasso = new Compasso(4, 4);
        this.tempo = 60;
        this.clave = Clave.SOL;
        this.proxPartitura = null;
        this.escala = Escala.DOMAIOR;
        this.repeticoes = 0;
        // this.dinamica = Dinamica.NONE;
    }
    Partitura.prototype.setCompasso = function (compasso) {
        this.compasso = compasso;
        return this;
    };
    Partitura.prototype.setTempo = function (tempo) {
        this.tempo = tempo;
        return this;
    };
    Partitura.prototype.setClave = function (clave) {
        this.clave = clave;
        return this;
    };
    Partitura.prototype.concatenate = function (proxPartitura) {
        this.proxPartitura = proxPartitura;
        return this;
    };
    Partitura.prototype.setEscala = function (escala) {
        this.escala = escala;
        return this;
    };
    Partitura.prototype.repetir = function (vezes) {
        this.repeticoes = vezes;
        return this;
    };
    /*
    setDinamica(dinamica){
        this.dinamica = dinamica;
        return this;
    }
    */
    Partitura.prototype.build = function () {
        // Suprimido para teste
        // if (this.notas.length = 0) {
        //     throw Error("Partitura criada sem notas");
        // }
        return this;
    };
    Partitura.prototype.toString = function () {
        var _a;
        var str = "qtde notas: " + ((this.notas != null) ? ((_a = this.notas) === null || _a === void 0 ? void 0 : _a.length) : 0)
            + ", clave: " + this.clave
            + ", tempo: " + this.tempo
            + ", compasso: " + this.compasso.toString()
            + ", escala: " + this.escala
            + ", ritornelos: " + this.repeticoes
            + ", tem próxima:" + (this.proxPartitura != null);
        return str;
    };
    return Partitura;
}());
var Nota = /** @class */ (function () {
    function Nota() {
    }
    return Nota;
}());
var Compasso = /** @class */ (function () {
    function Compasso(numerador, denominador) {
        this.numerador = numerador;
        this.denominador = denominador;
    }
    Compasso.prototype.toString = function () {
        return this.numerador + "/" + this.denominador;
    };
    return Compasso;
}());
var Clave;
(function (Clave) {
    Clave["SOL"] = "Sol";
    Clave["FA"] = "F\u00E1";
})(Clave || (Clave = {}));
var Escala;
(function (Escala) {
    Escala["DOMAIOR"] = "Do Maior";
    Escala["REMENOR"] = "Re Menor";
    Escala["SOLMAIOR"] = "Sol Maior";
    Escala["PENTATONICAFASUS"] = "Pentat\u00F4nica Fa#";
})(Escala || (Escala = {}));
var Teste = /** @class */ (function () {
    function Teste() {
        // Para facilitar os testes, foi permitido que partituras sejam criadas sem notas
        this.partitura0 = new Partitura(null);
        this.partitura1 = new Partitura(null).setTempo(120).setClave(Clave.FA).setEscala(Escala.REMENOR);
        this.partitura2 = new Partitura(null).concatenate(this.partitura1).setCompasso(new Compasso(3, 4)).setTempo(120).setClave(Clave.FA).setEscala(Escala.REMENOR);
        this.partitura3 = new Partitura(null).setEscala(Escala.PENTATONICAFASUS).repetir(2).setCompasso(new Compasso(5, 4));
    }
    Teste.prototype.testar = function () {
        console.log(this.partitura0.toString());
        console.log(this.partitura1.toString());
        console.log(this.partitura2.toString());
        console.log(this.partitura3.toString());
    };
    return Teste;
}());
var teste = new Teste();
teste.testar();
