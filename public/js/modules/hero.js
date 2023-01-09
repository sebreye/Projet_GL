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

    export default Hero;