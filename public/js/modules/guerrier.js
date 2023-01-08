import Hero from "./hero";

class Warrior extends Hero {
    constructor(name, health, attack) {
        super(name, health, attack);
        this.rage = 0;
    }

    attack() {
        super.attack();
        this.rage++;
        if (this.rage >= 4) {
          this.attack += this.attack * 0.25;
            this.rage = 0;
        }
        }
    }

    export default Warrior;