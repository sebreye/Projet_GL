import Guerrier from "./guerrier.js";
import Mage from "./mage.js";
import Archer from "./archer.js";
import Boss from"./boss.js";

export function askstart() {
    let reponse = prompt("Voulez-vous démarrer le jeu ? (oui / non)")
    if(reponse.toLowerCase() === 'oui'){
        console.log('le jeu démarre');
    }else{
        console.log("le jeu n'a pas été lancé");
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


export function RandomTargetBoss() {
    
    const target = heroes[Math.floor(Math.random() * heroes.length)];
    if (target.health > 0) {
    console.log(`${boss.name}  attaque  ${target.name}  et inflige ${boss.attack}  dégâts.`);
    target.health -= boss.attack;
    }
}
export function PvBH() {
    while (boss.health > 0 && heroes.some(hero => hero.health > 0)) {
        console.log("Points de vie de " + boss.name + ": " + boss.health);
    }
        for (const hero of heroes) {
            console.log("Points de vie de " + hero.name + ": " + hero.health);
        }
}



let guerrier = new Guerrier('Guerrier', 100, 25)
let mage = new Mage('Mage', 100, 15)
let archer = new Archer('Archer', 100, 10)
let Sauron = new Boss('Sauron', 250, 30)
let Chronos = new Boss('Chronos', 300, 35)
let Lilith = new Boss('Lilith', 350, 40)