import Hero from "./hero.js";

class Mage extends Hero {
    constructor(name, health, attack) {
        super(name, health, attack);
        this.mana = Math.floor(Math.random() * 3) + 7;
    }

    attack() {
        if (this.mana < 2) {
            console.log(`${this.name} n'a plus assez de mana pour attaquer. Il passe son tour.`);
                this.mana += 7;
            return;
        }
        super.attack();
        this.mana -= 2;
        }
    }

    export default Mage;