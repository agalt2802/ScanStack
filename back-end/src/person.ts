// Definizione di una classe chiamata "Persona"
export class Person {
    // Proprietà della classe
    nome: string;
    cognome: string;
    eta: number;

    // Costruttore della classe
    constructor(nome: string, cognome: string, eta: number) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    // Metodo della classe per ottenere l'età della persona
    getEta(): number {
        return this.eta;
    }

    // Metodo della classe per stampare il nome completo della persona
    stampaNomeCompleto(): string {
        return `${this.nome} ${this.cognome}`;
    }
}
