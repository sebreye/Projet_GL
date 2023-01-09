import Guerrier from "./modules/guerrier.js";
import Mage from "./modules/mage.js";
import Archer from "./modules/archer.js";
import Sauron from "./modules/boss.js";
import Chronos from "./modules/boss.js"
import Lilith from "./modules/boss.js"
import { askstart, RandomBoss, Qenigma } from "./modules/fonction.js";
import enigma from "./modules/enigma.js";

;


    function StartGL() {
        let heroes = [new Guerrier("Guerrier", 100, 25), new Mage("Mage", 75, 35), new Archer("Archer", 50, 40)];
        let bosses = [new Sauron("Sauron", 300, 10), new Chronos("Chronos", 450, 15), new Lilith("Lilith", 500, 20)]
        let boss = bosses[Math.floor(Math.random() * bosses.length)];
        alert('Bienvenue sur Geek of Legends');
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
                    boss.health -= hero.attack
                    console.log(boss.health);
                    break;
                    case "defend":
                    console.log(hero.name + " se défend et récupère " + 2.5 * hero.health + " points de vie.");
                    hero.health *= 2.5;
                    boss.health -= 0.5 * hero.attack
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
            let target = heroes[Math.floor(Math.random() * heroes.length)];
            if (target.health > 0) {
                console.log(boss.name + " attaque " + target.name + " et inflige " + boss.attack + " dégâts.");
                target.health -= boss.attack;
            }
        }
        
          // Boss pose une énigme
        console.log("Le boss " + boss.name + " vous pose une énigme:");
        Qenigma()
        
    }


StartGL()
