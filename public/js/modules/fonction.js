import { RandBoss, Hero,  } from "./instance.js";
import enigma from "./enigma.js";



export function askstart() {
    let reponse = prompt("Voulez-vous démarrer le jeu ? (oui / non)")
    if(reponse.toLowerCase() === 'oui'){
        console.log('le jeu démarre');
    }else{
        console.log("le jeu n'a pas été lancé");
    }
}

export function RandomBoss() {
    console.log(`Un nouveau boss, ${RandBoss.name}, apparaît !`);
}
export function act() {
    for(let hero of Hero){
    let posture = prompt(`Choisissez votre posture pour ${hero.name} (attack/defend):`);
        switch (posture) {
            case "attack":
                console.log(hero.name + " attaque et inflige " + 1.4 * hero.attack + " dégâts.");
                hero.health -= 0.75 * hero.attack;
                RandBoss.health -= 1.4 * hero.attack
                console.log("Points de vie de " + RandBoss.name + ": " + RandBoss.health)
                    break;
                    case "defend":
                    console.log(hero.name + " se défend et récupère " + 0.5 * hero.health + " points de vie.");
                    hero.health *= 0.5;
                    RandBoss.health -= 0.5 * hero.attack
                    console.log("Points de vie de " + RandBoss.name + ": " + RandBoss.health)
                    break;
                    case "normal":
                        console.log(hero.name + " attaque et inflige " + hero.attack + " dégâts.");
                        RandBoss.health -= hero.attack
                    break;
                    default:
                    console.log(hero.name + " ne fait rien de particulier.");
                    break;
                }
            }
}

export function Distribute(){
    let pointsToDistribute = 300;
    while (pointsToDistribute > 0) {
        for (let hero of Hero) {
        let points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour sa vie ? Il vous reste ${pointsToDistribute} points à distribuer.`));
        if (points > pointsToDistribute) {
            console.log("Vous n'avez pas assez de points à distribuer. Veuillez entrer une valeur inférieure.");
            continue;
        }
        hero.health += points;
        pointsToDistribute -= points;
        }
}
}
    function DistributePA() {
        let pointsToDistribute = 120;
        while (pointsToDistribute > 0) {
        for (let hero of Hero) {
        let points = parseInt(prompt(`${hero.name}, combien de points souhaitez-vous lui attribuer pour sa vie ? Il vous reste ${pointsToDistribute} points à distribuer.`));
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
    console.log(`Le boss vous pose une énigme : ${enigme.question}`);
    let essais = 0;
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Quelle est la réponse ?");
        if (answer.toLowerCase() === enigme.reponse.toLowerCase()) {
            alert("Bonne réponse ! Vous avez vaincu le boss.");
            break;
        }
        else {
            essais++;
            alert(`Mauvaise réponse, vous avez encore ${3 - essais} essais.`);
        }
    }
    if(essais === 3){
        alert(`Vous avez perdu, ${RandBoss.name} vous a tués`);
    }
}
    // let enigme = enigma[Math.floor(Math.random() * enigma.length)];
    // console.log(`le boss vous pose une énigme : ${enigme.question}`);
    // for (let i = 0; i < 3; i++) {
    //     let answer = prompt("Quelle est la réponse ?");
    //     if (answer.toLowerCase() === enigme.reponse.toLowerCase()) {
    //     alert("Bonne réponse ! Vous avez vaincu le boss.");
    //     break;
    //     }
    //     else if (answer.toLowerCase() !== enigme.reponse.toLowerCase()){
    //         alert("Vous avez échoué à l'énigme. recommencez.");
    //         }
    //     else{
    //         alert("vous avez perdu")
    //     }
    // }
// }

export function BossTarget() {
    let target = Hero[Math.floor(Math.random() * Hero.length)];
            if (target.health > 0) {
                console.log(`${RandBoss.name} attaque  ${target.name}  et inflige  ${RandBoss.attack}  dégâts.`);
                target.health -= RandBoss.attack;
            }
}

export function StartGL() {
        // annonce le jeu
        alert('Bienvenue sur Geek of Legends');
        // demande de commencer
        askstart()
        
        for (let hero of Hero) {
            let newName = prompt(`${hero.name}, entrez votre nouveau nom :`);
            hero.name = newName;
            console.log(`${hero.name} est maintenant le nouveau nom de votre héros.`);
        }
        // distribution point de vie
        Distribute()
        // distribution point d'attaque
        DistributePA()
    
        // ajout du boss Random
        RandomBoss()
        
        while (RandBoss.health > RandBoss.maxHealth * 0.2) {
            console.log("Points de vie de " + RandBoss.name + ": " + RandBoss.health);
            for (let hero of Hero) {
                console.log(`Points de vie de ${hero.name} : ${hero.health}
                Points de d'attaque de ${hero.name} : ${hero.attack}`);
                
            }
            
            // Tour de chaque héros
            for (let hero of Hero) {
                if (hero.health <= 0) {
                continue;
            }
            console.log("C'est au tour de " + hero.name + " de jouer.");
            // choix de posture
            // act()
            let posture = prompt(`Choisissez votre posture pour ${hero.name} (attack/defend):`);
        switch (posture) {
            case "attack":
                console.log(hero.name + " attaque et inflige " + 1.4 * hero.attack + " dégâts.");
                // hero.health -= 0.75 * hero.attack;
                RandBoss.health -= 1.4 * hero.attack
                console.log("Points de vie de " + RandBoss.name + ": " + RandBoss.health)
                break;
            case "defend":
                console.log(hero.name + " se défend et récupère " + 0.5 * hero.health + " points de vie.");
                hero.health += 0.5 * hero.health;
                RandBoss.health -= 0.5 * hero.attack
                console.log("Points de vie de " + RandBoss.name + ": " + RandBoss.health)
                break;
            case "normal":
                console.log(hero.name + " attaque et inflige " + hero.attack + " dégâts.");
                RandBoss.health -= hero.attack
                break;
            default:
                console.log(hero.name + " ne fait rien de particulier.");
                break;
                }
            }          
            // Tour du boss
            if (RandBoss.health <= 0) {
                continue;
            }
            console.log(`C'est au tour de  ${RandBoss.name}  de jouer.`);
            // Attaque aléatoire d'un héros par le boss

            // BossTarget()
            let target = Hero[Math.floor(Math.random() * Hero.length)];
            if (target.health > 0) {
                console.log(RandBoss.name + " attaque " + target.name + " et inflige " + RandBoss.attack + " dégâts.");
                target.health -= RandBoss.attack;
            }
            
        }
          // Boss pose une énigme
        console.log(`Le boss  ${RandBoss.name}  vous pose une énigme:`);
        Qenigma(enigma) 
        
}
// essai demande restart
// export function restartGL() {
//     let restart = true;
//     while (restart) {
//     StartGL();
//     let userInput = prompt("Voulez-vous relancer le jeu? (oui/non)");
//     switch (userInput.toLowerCase()) {
//     case "oui":
//         restart = true;
//         break;
//     case "non":
//         restart = false;
//         break;
//     default:
//         console.log("Entrée non valide, veuillez saisir oui ou non.");
//         break;
//     }
// }
