class Hero {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.attack = attack;
    }
    defense() {
        this.health += this.maxHealth * 0.5;
        this.attaque -= this.attaque * 0.5;
        }
    
    attaque() {
        this.health -= this.maxHealth * 0.25;
        this.attaque += this.attaque * 0.4;
        }
    }