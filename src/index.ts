// import MountainBike from "./Entities/Bicycle/MountainBike";
// import RecumbentBike from "./Entities/Bicycle/RecumbentBike";
// import RoadBike from "./Entities/Bicycle/RoadBike";
import Bicycle from "./Entities/Bicycle/Bicycle";
import Gear from "./Entities/Gear";
import Part from "./Entities/Parts/Part";
import Parts from "./Entities/Parts/Parts";
import Wheel from "./Entities/Wheel";

import { mixer } from "./ts/mixins/ApplyMixins";

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

// let bike = new Bicycle({size: 'M', tapeColor: 'red', style: 'road'});
// console.log(bike.Spares(''));

// bike = new MountainBike({size: 'S', frontShock: 'Manitou', rearShock: 'Fox', style: 'mountain'});
// console.log(bike.Spares());

// // After refactoring code to utilize abstract class and template pattern
// let bike = new MountainBike({frontShock: 'Manitou', rearShock: 'Fox'});
// console.log(bike.Spares());

// let xbike = new RoadBike({tapeColor: 'red'});
// console.log(xbike.Spares());

// let ybike = new RecumbentBike({flag: 'tall and orange'});
// console.log(ybike.Spares());
// // bike.Schedule = new Schedule();
// console.log(bike.Schedulable(new Date(), new Date()));

// let bike  = new Bicycle({size: 'L', parts: new RoadBikeParts({tapeColor: 'red'})});
// console.log(bike);
// console.log(bike.Spares());

let chain = new Part({name: 'chain', description: '11-speed'});
let roadTire = new Part({name: 'tireSize', description: "23"});
let tape = new Part({name: 'tape', description: "Red"});
let mountainTire = new Part({name: 'tireSize', description: "2.1"});
let rearShock = new Part({name: 'rearShock', description: "Fox", needsSpare: false});
let frontShock = new Part({name: 'frontShock', description: "Manitou"});

let roadBikeParts = new Parts({parts: [chain, roadTire, tape, rearShock]});

console.log(roadBikeParts.Spares());
console.log(roadBikeParts.length);