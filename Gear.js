"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Gear {
    constructor(chainring, cog, wheel = null) {
        this._chainring = chainring;
        this._cog = cog;
        this._gearWheel = wheel;
    }
    get Cog() {
        return this._cog;
    }
    set Cog(value) {
        this._cog = value;
    }
    get ChainRing() {
        return this._chainring;
    }
    set ChainRing(value) {
        this._chainring = value;
    }
    get GearWheel() {
        return this._gearWheel;
    }
    set GearWheel(value) {
        this._gearWheel = value;
    }
    Ratio() {
        return this.ChainRing / this.Cog;
    }
    GearInches() {
        return this.GearWheel ? this.Ratio() * this.GearWheel.Diameter() : this.Ratio();
    }
}
exports.default = Gear;
