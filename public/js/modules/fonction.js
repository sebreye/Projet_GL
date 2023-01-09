import Guerrier from "./guerrier.js";
import Mage from "./mage.js";
import Archer from "./archer.js";
import Boss from"./boss.js";
import enigma from "./enigma.js";

export function askstart() {
    let reponse = prompt("Voulez-vous démarrer le jeu ? (oui / non)")
    if(reponse.toLowerCase() === 'oui'){
        console.log('le jeu démarre');
    }else{
        console.log("le jeu n'a pas été lancé");
    }
}
export function NameHero(){
    const heroes = [new Guerrier("Guerrier", 100, 50), new Mage("Mage", 75, 100), new Archer("Archer", 50, 75)];

for (let hero of heroes) {
    let newName = prompt(`${hero.name}, entrez votre nouveau nom :`);
    hero.name = newName;
    console.log(`${hero.name} est maintenant le nouveau nom de votre héros.`);
}

}
export function RandomBoss() {
    let bosses = [Sauron,Chronos,Lilith];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
}
export function act(posture) {
    switch (posture) {
        case "attack":
        console.log(this.name + " attaque et inflige " + this.attack + " dégâts.");
        this.health -= 0.75 * this.attack;
        break;
        case "defend":
        console.log(this.name + " se défend et récupère " + 2.5 * this.health + " points de vie.");
        this.health *= 2.5;
        break;
        default:
        console.log(this.name + " ne fait rien de particulier.");
        break;
    }
}


export function Qenigma() {
    let enigme = enigma[Math.floor(Math.random() * enigma.length)];
    console.log(`le boss vous pose une énigme : ${enigme.question}`);
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Quelle est la réponse ?");
        if (answer.toLowerCase() === enigme.reponse.toLowerCase()) {
        console.log("Bonne réponse ! Vous avez vaincu le boss.");
        return;
        }
    }
    if (answer.toLowerCase() !== enigme.reponse.toLowerCase()){
    console.log("Vous avez échoué à l'énigme. Vous avez perdu.");}
    }



let guerrier = new Guerrier('Guerrier', 100, 25)
let mage = new Mage('Mage', 100, 15)
let archer = new Archer('Archer', 100, 10)
let Sauron = new Boss('Sauron', 250, 30)
let Chronos = new Boss('Chronos', 300, 35)
let Lilith = new Boss('Lilith', 350, 40)