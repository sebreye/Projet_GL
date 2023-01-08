import enigma from "./enigma";

class Boss {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.attack = attack;
  }