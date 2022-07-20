import PartsFactory from "./Entities/Parts/PartsFactory";

import Gear from "./Entities/Gear";
import Wheel from "./Entities/Wheel";

import { mixer } from "./ts/mixins/ApplyMixins";
import Bicycle from "./Entities/Bicycle/Bicycle";

mixer();

let chainring = 52;
let cog = 11;
let ratio = (chainring / cog).toFixed(2);
console.log(ratio);

chainring = 30;
cog = 27;
ratio = (chainring / cog).toFixed(2);
console.log(ratio);

const w = new Wheel({rim: 26, tire: 1.5})
console.log(w.Circumference());
console.log(new Gear({chainring: 52, cog: 11, wheel: w}).Ratio());

const roadConfig = [
  {name: 'chain', description: '11-speed'},
  {name: 'tireSize', description: '23'},
  {name: 'tapeColor', description: 'red'}
]

const mountainConfig = [
  {name: 'chain', description: '11-speed'},
  {name: 'tireSize', description: "2.1"},
  {name: 'frontShock', description: "Manitou"},
  {name: 'rearShock', description: "Fox", needsSpare: false}   
]

// console.log(PartsFactory.Build(roadConfig));
// console.log(PartsFactory.Build(mountainConfig));

const recumbentConfig = [
  {name: 'chain', description: '9-speed'},
  {name: 'tireSize', description: '28'},
  {name: 'flag', description: 'tall and orange'}
]

const recumbentBike = new Bicycle(
  {size: 'L', parts: PartsFactory.Build(mountainConfig)}
) 

console.log(recumbentBike.Spares());
