import Wheel from "./Wheel";

class Gear {
    private _chainring: number;
    private _cog: number;
    private _gearWheel: Wheel | null;

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

    constructor(chainring: number, cog: number, wheel: Wheel | null = null) {
        this._chainring = chainring;
        this._cog = cog;
        this._gearWheel = wheel;
    }

    Ratio(): number {
        return this.ChainRing / this.Cog;
    }

    GearInches(): number {
        return this.GearWheel ? this.Ratio() * this.GearWheel.Diameter() : this.Ratio();
    }
}

export default Gear;