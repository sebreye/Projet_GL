import { Boss, Guerrier, Mage, Archer } from "./class.js";
// import * as Class from "class.js";





export let boss = [new Boss("Sauron", 250, 10), new Boss("Chronos", 350, 15), new Boss("Lilith", 400, 20)]
export let RandBoss  = boss[Math.floor(Math.random() * boss.length)];
export let Hero = [new Guerrier('Guerrier', 0, 0), new Mage('Mage', 0, 0, 0), new Archer('Archer', 0, 0, 0)]



