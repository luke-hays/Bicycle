import PartsParams from "../../ts/interfaces/PartsParams.interface";
import Parts from "./Parts";

interface params extends PartsParams {
  tapeColor: string
}

class RoadBikeParts extends Parts {
  private _tapeColor: string;

  public get TapeColor(): string {
    return this._tapeColor;
  }
  
  public set TapeColor(v: string) {
    this._tapeColor = v;
  }

  constructor({chain, tireSize, tapeColor}: params) {
    super({chain, tireSize});
    this._tapeColor = tapeColor;
  }

  protected override DefaultTireSize(): string {
    return "23";
  }

  protected override LocalSpares(): {} {
    return {
      tapeColor: this.TapeColor
    }
  }
}

export default RoadBikeParts;