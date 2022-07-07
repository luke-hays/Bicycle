"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Wheel {
    constructor(rim, tire) {
        this._rim = rim;
        this._tire = tire;
    }
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
    Diameter() {
        return this.Rim + (this.Tire * 2);
    }
    Circumference() {
        return this.Diameter() * Math.PI;
    }
    ;
}
exports.default = Wheel;
