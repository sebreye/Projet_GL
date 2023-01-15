


class Hero {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.attack = attack;
    }
    defense() {
        this.health += this.maxHealth * 0.5;
        console.log(this.health += this.maxHealth * 0.5);
        this.attack  *=  0.5;
        console.log(this.attack *=  0.5);
        }
    
    attaque() {
        this.attack *= 0.4;
        console.log(this.attack += this.attack * 0.4);
        }
    }
export class Boss {
        constructor(name, health, attack) {
            this.name = name;
            this.health = health;
            this.maxHealth = health;
            this.attack = attack;
    }
    }
export class Guerrier extends Hero {
        constructor(name, health, attack) {
            super(name, health, attack);
            this.rage = 0;
        }
    }
export class Mage extends Hero {
        constructor(name, health, attack) {
            super(name, health, attack);
            this.mana = Math.floor(Math.random() * 3) + 7;
        }
    }
export class Archer extends Hero {
        constructor(name, health, attack) {
            super(name, health, attack);
            this.arrows = Math.floor(Math.random() * 5) + 7;
        }
    }
