import Gear from './Gear';
import Wheel from './Wheel';

let chainring = 52;
let cog = 11;
let ratio = (chainring / cog).toFixed(2);
console.log(ratio);

chainring = 30;
cog = 27;
ratio = (chainring / cog).toFixed(2);
console.log(ratio);

const w = new Wheel(26, 1.5)
console.log(w.Circumference());
console.log(new Gear(52, 11, w).Ratio());
console.log(new Gear(30, 27).Ratio());