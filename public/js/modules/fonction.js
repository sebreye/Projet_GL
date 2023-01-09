import Guerrier from "./guerrier.js";
import Mage from "./mage.js";
import Archer from "./archer.js";
import Boss from"./boss.js";

function askstart(reponse) {
    let reponse = prompt("Voulez-vous démarrer le jeu ? (oui / non)")
    if(reponse.toLowerCase() === 'oui'){
        console.log('le jeu démarre');
    }else{
        console.log("le jeu n'a pas été lancé");
    }
}

function RandomBoss() {
    let bosses = [Sauron,Chronos,Lilith];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
}
function Action() {
    let heroes = [guerrier, mage, archer]
    let action = prompt("que voulez-vous faire attaque/défense")

    switch (action) {
        case 'attaque':
            heroes.forEach(element => element.attaque)
            console.log("les héros passe à l'attaque");
            break;
        case 'défense':
            heroes.forEach(element => element.defense)
            console.log("les héros se défendent");
        default:
            break;
    }
}
function RandomTargetBoss() {
    let bosses = [Sauron,Chronos,Lilith];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    const target = heroes[Math.floor(Math.random() * heroes.length)];
    if (target.health > 0) {
    console.log(`${boss.name}  attaque  ${target.name}  et inflige ${boss.attack}  dégâts.`);
    target.health -= boss.attack;
    }
}
function PvBH() {
    let bosses = [Sauron,Chronos,Lilith];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    while (boss.health > 0 && heroes.some(hero => hero.health > 0)) {
        console.log("Points de vie de " + boss.name + ": " + boss.health);
    }
    let heroes = [guerrier, mage, archer]
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