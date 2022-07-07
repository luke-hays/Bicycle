class Wheel {
    private _rim: number;
    private _tire: number;

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

    constructor(rim: number, tire: number) {
        this._rim = rim;
        this._tire = tire;
    };
}

export default Wheel;