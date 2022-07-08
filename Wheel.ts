interface WheelConstructorParams {
    rim: number,
    tire: number
}

class Wheel {
    private _rim: number;
    private _tire: number;
    
    constructor({rim, tire}: WheelConstructorParams) {
        this._rim = rim;
        this._tire = tire;
    };

    get Rim() {
        return this._rim;
    }
    set Rim(value) {
        this._rim = value;
    }

    get Tire() {
        return this._tire;
    }
    set Tire(value) {
        this._tire = value;
    }

    public Diameter(): number {
        return this.Rim + (this.Tire * 2);
    }

    public Circumference(): number {
        return this.Diameter() * Math.PI;
    }
}

export default Wheel;