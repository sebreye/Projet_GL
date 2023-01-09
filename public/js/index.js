import Guerrier from "./modules/guerrier.js";
import Mage from "./modules/mage.js";
import Archer from "./modules/archer.js";
import { askstart, RandomBoss, Action, RandomTargetBoss, PvBH } from "./modules/fonction.js";

function startGame() {
    let response = prompt("Voulez-vous démarrer le jeu ? (oui / non)");
    if (response.toLowerCase() === "oui") {
        console.log("Le jeu démarre !");
    } else {
        console.log("Le jeu n'a pas été lancé.");
    }
}

startGame();




    let bosses = [new Sauron("Sauron", 1000, 10), new Chronos("Chronos", 2000, 15), new Lilith("Lilith", 1500, 25)];
    let boss = bosses[Math.floor(Math.random() * bosses.length)];
    console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
    let heroes = [new Guerrier("Guerrier", 100, 50), new Mage("Mage", 75, 100), new Archer("Archer", 50, 75)];
    let allHeroesDead = true;
    while (boss.health > 0) {
        for (let hero of heroes) {
        if (hero.health <= 0) {
            continue;
        }
        allHeroesDead = false;
        let action = prompt(`${hero.name}, que voulez-vous faire ? (attaque / défense)`);
        if (action.toLowerCase() === "défense") {
            hero.defense();
        } else if(action.toLowerCase()=== "attaque  "){
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
        


    function StartGL() {
        console.log('Bienvenue sur Geek of Legends');
        askstart(reponse)
        
        RandomBoss()

        Action()

        RandomTargetBoss()

        PvBH()
        if (boss.health <= 0) {
            console.log(`${boss.name} a été vaincu ! Vous avez gagné !`);
          } else if (boss.health <= boss.maxHealth * 0.2) {
            boss.Qenigma();
        }
    }



    