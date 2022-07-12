import Gear from './Gear';
import Wheel from './Wheel';
import Bicycle from './Bicycle';

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

const bike = new Bicycle({size: 'M', tapeColor: 'red'});
console.log(bike.Spares());