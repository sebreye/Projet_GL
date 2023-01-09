import Hero from "./hero.js";

class Guerrier extends Hero {
    constructor(name, health, attack) {
        super(name, health, attack);
        this.rage = 0;
    }

    attacks() {
        super.attacks();
        this.rage++;
        if (this.rage >= 4) {
          this.attacks += this.attacks * 0.25;
            this.rage = 0;
        }
        }
    }

    export default Guerrier;