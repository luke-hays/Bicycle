import Bicycle from "./Bicycle";
import BicylceParams from "./ts/interfaces/BicycleParams.interface"

interface params extends BicylceParams {
  tapeColor: string;
}

class RoadBike extends Bicycle {
  private _tapeColor: string;

  public get TapeColor(): string {
    return this._tapeColor;
  }
  
  public set TapeColor(v: string) {
    this._tapeColor = v;
  }

  constructor({size, chain, tireSize, tapeColor}: params) {
    super({size, chain, tireSize: tireSize});
    this._tapeColor = tapeColor;
  }

  protected override DefaultTireSize(): string {
    return "23";
  }

  public Spares() {
    return {
      ...super.Spares(),
      tapeColor: this.TapeColor
    }
  }
}

export default RoadBike;