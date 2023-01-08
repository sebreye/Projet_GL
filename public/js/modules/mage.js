import Hero from "./hero";

class Mage extends Hero {
    constructor(name, health, attack) {
        super(name, health, attack);
        this.mana = Math.floor(Math.random() * 3) + 7;
    }

    