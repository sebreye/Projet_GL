import Hero from "./hero.js";

class Archer extends Hero {
    constructor(name, health, attack) {
        super(name, health, attack);
        this.arrows = Math.floor(Math.random() * 5) + 7;
    }
    attack() {
        if (this.arrows < 2) {
            console.log(`${this.name} n'a plus de flèches. Il passe son tour.`);
            this.arrows += 6;
            return;
        }
        super.attack();
        this.arrows -= 2;
        }
    }


    export default Archer;