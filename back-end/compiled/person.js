"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// Definizione di una classe chiamata "Persona"
class Person {
    // Costruttore della classe
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    // Metodo della classe per ottenere l'età della persona
    getEta() {
        return this.eta;
    }
    // Metodo della classe per stampare il nome completo della persona
    stampaNomeCompleto() {
        return `${this.nome} ${this.cognome}`;
    }
}
exports.Person = Person;
