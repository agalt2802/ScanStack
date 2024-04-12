"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
// Definizione di una classe chiamata "User"
class User extends person_1.Person {
    // Costruttore della classe
    constructor(nome, cognome, eta, username, password) {
        super(nome, cognome, eta);
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.username = username;
        this.password = password;
    }
    getCredentials() {
        return { username: this.username, password: this.password };
    }
}
// Creazione di un'istanza della classe User
const user1 = new User("Mario", "Rossi", 30, 'myuser', 'mypassword');
// Utilizzo dei metodi e delle proprietà dell'istanza
console.log(user1.stampaNomeCompleto()); // Output: Mario Rossi
console.log(user1.getEta()); // Output: 30
console.log(user1.getCredentials());
