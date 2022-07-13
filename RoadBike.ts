import Bicycle from "./Bicycle";

interface RoadBikeConstructorParams {
  size: string;
  tapeColor?: string;
}

class RoadBike extends Bicycle{
  private _tapeColor: string;

  public get TapeColor() : string {
    return this._tapeColor;
  }
  public set TapeColor(v: string) {
    this._tapeColor = v;
  }

  constructor({size, tapeColor = ' '}: RoadBikeConstructorParams) {
    super({size});
    this._tapeColor = tapeColor;
  }

  public Spares() {
    return {
      chain: '11-speed',
      tireSize: '23',
      tapeColor: this.TapeColor
    };
  }
}

export default RoadBike;