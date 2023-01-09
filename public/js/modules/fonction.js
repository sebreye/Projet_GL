import Guerrier from "./guerrier.js";
import Mage from "./mage.js";
import Archer from "./archer.js";
import Boss from"./boss.js";
import enigma from "./enigma.js";
import Sauron from "./boss.js";
import Chronos from "./boss.js"
import Lilith from "./boss.js"

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

export function Distribute(){
    let heroes = [new Guerrier("Guerrier", 0, 0), new Mage("Mage", 0, 0), new Archer("Archer", 0, 0)];

let pointsToDistribute = 300;
while (pointsToDistribute > 0) {
    for (let hero of heroes) {
    let points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour sa vie ? Il vous reste ${pointsToDistribute} points à distribuer.`));
    if (points > pointsToDistribute) {
        console.log("Vous n'avez pas assez de points à distribuer. Veuillez entrer une valeur inférieure.");
        continue;
    }
    hero.health += points;
    pointsToDistribute -= points;
    }
}
pointsToDistribute = 300;
while (pointsToDistribute > 0) {
    for (const hero of heroes) {
    const points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour son attaque ? Il vous reste ${pointsToDistribute} points à distribuer.`));
    if (points > pointsToDistribute) {
        console.log("Vous n'avez pas assez de points à distribuer. Veuillez entrer une valeur inférieure.");
        continue;
    }
    hero.attack += points;
    pointsToDistribute -= points;
    }
}

}
export function Qenigma() {
    let enigme = enigma[Math.floor(Math.random() * enigma.length)];
    console.log(`le boss vous pose une énigme : ${enigme.question}`);
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Quelle est la réponse ?");
        if (answer.toLowerCase() === enigme.reponse.toLowerCase()) {
        alert("Bonne réponse ! Vous avez vaincu le boss.");
        return;
        }
    }
    if (answer.toLowerCase() !== enigme.reponse.toLowerCase()){
    alert("Vous avez échoué à l'énigme. Vous avez perdu.");}
    }

    export function StartGL() {
        let heroes = [new Guerrier("Guerrier", 0, 0), new Mage("Mage", 0, 0), new Archer("Archer", 0, 0)];
        let bosses = [new Sauron("Sauron", 250, 10), new Chronos("Chronos", 350, 15), new Lilith("Lilith", 400, 20)]
        let boss = bosses[Math.floor(Math.random() * bosses.length)];
        alert('Bienvenue sur Geek of Legends');

        askstart()
        
        for (let hero of heroes) {
            let newName = prompt(`${hero.name}, entrez votre nouveau nom :`);
            hero.name = newName;
            console.log(`${hero.name} est maintenant le nouveau nom de votre héros.`);
        }

        let pointsToDistribute = 300;
while (pointsToDistribute > 0) {
    for (let hero of heroes) {
    let points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour sa vie ? Il vous reste ${pointsToDistribute} points à distribuer.`));
    if (points > pointsToDistribute) {
        console.log("Vous n'avez pas assez de points à distribuer. Veuillez entrer une valeur inférieure.");
        continue;
    }
    hero.health += points;
    pointsToDistribute -= points;
    }
}
pointsToDistribute = 120;
while (pointsToDistribute > 0) {
    for (const hero of heroes) {
    const points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour son attaque ? Il vous reste ${pointsToDistribute} points à distribuer.`));
    if (points > pointsToDistribute) {
        console.log("Vous n'avez pas assez de points à distribuer. Veuillez entrer une valeur inférieure.");
        continue;
    }
    hero.attack += points;
    pointsToDistribute -= points;
    }
}

        RandomBoss()

        while (boss.health > boss.maxHealth * 0.2) {
            console.log("Points de vie de " + boss.name + ": " + boss.health);
            for (let hero of heroes) {
                console.log("Points de vie de " + hero.name + ": " + hero.health);
                console.log(`Points de d'attaque de ${hero.name} : ${hero.attack}`);
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
                    console.log("Points de vie de " + boss.name + ": " + boss.health)
                    break;
                    case "defend":
                    console.log(hero.name + " se défend et récupère " + 2.5 * hero.health + " points de vie.");
                    hero.health *= 2.5;
                    boss.health -= 0.5 * hero.attack
                    console.log("Points de vie de " + boss.name + ": " + boss.health)
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
        Qenigma(enigma) 
    
    

    }