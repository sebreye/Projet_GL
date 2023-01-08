import Guerrier from "./modules/guerrier.js";
import Mage from "./modules/mage.js";
import Archer from "./modules/archer.js";
import Sauron from "./modules/boss.js";
import Chronos from "./modules/boss.js";
import Lilith from "./modules/boss.js";

function startGame() {
    const response = prompt("Voulez-vous démarrer le jeu ? (oui / non)");
    if (response.toLowerCase() === "oui") {
        console.log("Le jeu démarre !");
    } else {
        console.log("Le jeu n'a pas été lancé.");
    }
}

startGame();




while (true) {
    const bosses = [new Sauron("Sauron", 1000, 10), new Chronos("Chronos", 2000, 15), new Lilith("Lilith", 1500, 25)];
    const boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
    const heroes = [new Guerrier("Guerrier", 100, 50), new Mage("Mage", 75, 100), new Archer("Archer", 50, 75)];
    let allHeroesDead = true;
    while (boss.health > 0) {
        for (const hero of heroes) {
        if (hero.health <= 0) {
            continue;
        }
        allHeroesDead = false;
        const action = prompt(`${hero.name}, que voulez-vous faire ? (attaque / défense)`);
        if (action.toLowerCase() === "défense") {
            hero.defense();
        } else {
            hero.attaque();
        }
        boss.health -= hero.attaque;
        console.log(`${hero.name} attaque ${boss.name} et lui inflige ${hero.attaque} dégâts. Il lui reste ${boss.health} points de vie.`);
    }
    if (allHeroesDead) {
        console.log("Tous les héros sont morts. Vous avez perdu.");
        break;
    }
    }
    if (boss.health <= 0) {
        console.log(`${boss.name} a été vaincu ! Vous avez gagné !`);
      } else if (boss.health <= boss.maxHealth * 0.2) {
        boss.Qenigma();
    }
        const playAgain = prompt("Voulez-vous rejouer ? (oui / non)");
        if (playAgain.toLowerCase() === "non") {
        break;
    }
    }