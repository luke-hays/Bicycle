import Wheel from "./Wheel";

interface GearConstructorParams {
    chainring: number,
    cog: number,
    wheel: Wheel
}

class Gear {
    private _chainring: number;
    private _cog: number;
    private _gearWheel: Wheel;

    constructor({chainring, cog, wheel}: GearConstructorParams) {
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

    Ratio(): number {
        return this.ChainRing / this.Cog;
    }

    Diameter(): number {
        return this.GearWheel.Diameter();
    }

    GearInches(): number {
        return this.Ratio() * this.Diameter();
    }
}

export default Gear;