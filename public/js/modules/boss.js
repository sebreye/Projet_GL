import enigma from "./enigma";

class Boss {
    constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.attack = attack;
}
    Qenigma() {
    const enigme = enigma[Math.floor(Math.random() * enigma.length)];
    console.log(`${this.name} vous pose une énigme : ${enigme.question}`);
    for (let i = 0; i < 3; i++) {
        const answer = prompt("Quelle est la réponse ?");
        if (answer.toLowerCase() === enigme.answer.toLowerCase()) {
        console.log("Bonne réponse ! Vous avez vaincu le boss.");
        return;
        }
    }
    console.log("Vous avez échoué à l'énigme. Vous avez perdu.");
    }
}