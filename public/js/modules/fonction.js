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
    let bosses = [new Boss("Sauron", 250, 10), new Boss("Chronos", 150, 15), new Boss("Lilith", 300, 20)];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
}





let guerrier = new Guerrier('Guerrier', 100, 25)
let mage = new Mage('Mage', 100, 15)
let archer = new Archer('Archer', 100, 10)
let Sauron = new Boss('Sauron', 250, 30)
let Chronos = new Boss('Chronos', 300, 35)
let Lilith = new Boss('Lilith', 350, 40)