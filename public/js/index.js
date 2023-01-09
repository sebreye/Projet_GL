import Guerrier from "./modules/guerrier.js";
import Mage from "./modules/mage.js";
import Archer from "./modules/archer.js";
import Sauron from "./modules/boss.js";
import Chronos from "./modules/boss.js"
import Lilith from "./modules/boss.js"
import { askstart, RandomBoss, act } from "./modules/fonction.js";

// function startGame() {
//     let response = prompt("Voulez-vous démarrer le jeu ? (oui / non)");
//     if (response.toLowerCase() === "oui") {
//         console.log("Le jeu démarre !");
//     } else {
//         console.log("Le jeu n'a pas été lancé.");
//     }
// }

// startGame();




//     let bosses = [new Sauron("Sauron", 1000, 10), new Chronos("Chronos", 2000, 15), new Lilith("Lilith", 1500, 25)];
//     let boss = bosses[Math.floor(Math.random() * bosses.length)];
//     console.log(`Un nouveau boss, ${boss.name}, apparaît !`);
//     let heroes = [new Guerrier("Guerrier", 100, 50), new Mage("Mage", 75, 100), new Archer("Archer", 50, 75)];
//     let allHeroesDead = true;
//     while (boss.health > 0) {
//         for (let hero of heroes) {
//         if (hero.health <= 0) {
//             continue;
//         }
//         allHeroesDead = false;
//         let action = prompt(`${hero.name}, que voulez-vous faire ? (attaque / défense)`);
//         if (action.toLowerCase() === "défense") {
//             hero.defense();
//         } else if(action.toLowerCase()=== "attaque  "){
//             hero.attaque();
//         }
//         boss.health -= hero.attaque;
//         console.log(`${hero.name} attaque ${boss.name} et lui inflige ${hero.attaque} dégâts. Il lui reste ${boss.health} points de vie.`);
//     }
//     if (allHeroesDead) {
//         console.log("Tous les héros sont morts. Vous avez perdu.");
//         break;
//     }
//     }
//     if (boss.health <= 0) {
//         console.log(`${boss.name} a été vaincu ! Vous avez gagné !`);
//       } else if (boss.health <= boss.maxHealth * 0.2) {
//         boss.Qenigma();
//     }
        


    function StartGL() {
        let heroes = [new Guerrier("Guerrier", 100, 50), new Mage("Mage", 75, 100), new Archer("Archer", 50, 75)];
        let bosses = [new Sauron("Sauron", 200, 10), new Chronos("Chronos", 250, 15), new Lilith("Lilith", 300, 20)]
        let boss = bosses[Math.floor(Math.random() * bosses.length)];
        console.log('Bienvenue sur Geek of Legends');
        askstart()
        
        RandomBoss()

        while (boss.health > boss.maxHealth * 0.2) {
            console.log("Points de vie de " + boss.name + ": " + boss.health);
            for (let hero of heroes) {
                console.log("Points de vie de " + hero.name + ": " + hero.health);
            }
            
            // Tour de chaque héros
            for (let hero of heroes) {
                if (hero.health <= 0) {
                continue;
            }
            
            console.log("C'est au tour de " + hero.name + " de jouer.");
            
              // Choix de la posture du héros
                let posture = prompt("Choisissez votre posture (attack/defend):");
                switch (posture) {
                    case "attack":
                    console.log(hero.name + " attaque et inflige " + hero.attack + " dégâts.");
                    hero.health -= 0.75 * hero.attack;
                    break;
                    case "defend":
                    console.log(hero.name + " se défend et récupère " + 2.5 * hero.health + " points de vie.");
                    hero.health *= 2.5;
                    break;
                    default:
                    console.log(hero.name + " ne fait rien de particulier.");
                    break;
                }
            }          
            // Tour du boss
            if (boss.health <= 0) {
                continue;
            }
        
            console.log("C'est au tour de " + boss.name + " de jouer.");
        
            // Attaque aléatoire d'un héros par le boss
            const target = heroes[Math.floor(Math.random() * heroes.length)];
            if (target.health > 0) {
                console.log(boss.name + " attaque " + target.name + " et inflige " + boss.attack + " dégâts.");
                target.health -= boss.attack;
            }
        }
        
          // Boss pose une énigme
        console.log("Le boss " + boss.name + " vous pose une énigme:");
        const riddle = getRandomRiddle();
        console.log(riddle.question);
        const answer = prompt("Quelle est la réponse?");
        if (answer.toLowerCase() === riddle.answer.toLowerCase()) {
            console.log("Bonne réponse!");
        } else {
            console.log("Mauvaise réponse...");
            // Game over
            
            }
            
    }


StartGL()
