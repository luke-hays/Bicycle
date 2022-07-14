import Gear from './Gear';
import Wheel from './Wheel';
import MountainBike from './MountainBike';
import RoadBike from './RoadBike';
import RecumbentBike from './RecumbentBike';

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

// let bike = new Bicycle({size: 'M', tapeColor: 'red', style: 'road'});
// console.log(bike.Spares(''));

// bike = new MountainBike({size: 'S', frontShock: 'Manitou', rearShock: 'Fox', style: 'mountain'});
// console.log(bike.Spares());

// After refactoring code to utilize abstract class and template pattern
let bike = new MountainBike({frontShock: 'Manitou', rearShock: 'Fox'});
console.log(bike.Spares());

let xbike = new RoadBike({tapeColor: 'red'});
console.log(xbike.Spares());

let ybike = new RecumbentBike({flag: 'tall and orange'});
console.log(ybike.Spares());