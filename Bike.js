"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gear_1 = __importDefault(require("./Gear"));
const Wheel_1 = __importDefault(require("./Wheel"));
let chainring = 52;
let cog = 11;
let ratio = (chainring / cog).toFixed(2);
console.log(ratio);
chainring = 30;
cog = 27;
ratio = (chainring / cog).toFixed(2);
console.log(ratio);
const w = new Wheel_1.default(26, 1.5);
console.log(w.Circumference());
console.log(new Gear_1.default(52, 11, w).Ratio());
console.log(new Gear_1.default(30, 27).Ratio());
