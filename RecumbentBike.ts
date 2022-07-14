import Bicycle from "./Bicycle";
import BicycleParams from "./ts/interfaces/BicycleParams.interface";

interface params extends BicycleParams {
  flag: string;
}

class RecumbentBike extends Bicycle {
  private _flag: string;

  public get Flag(): string {
    return this._flag;
  }

  public set Flag(v: string) {
    this._flag = v;
  }

  constructor({size, chain, tireSize, flag}: params) {
    super({size, chain, tireSize});
    this._flag = flag;
  }

  protected override DefaultChain(): string {
    return '10-speed';
  }

  protected override DefaultTireSize(): string {
    return '28';
  }

  public Spares() {
    return {
      ...super.Spares(),
      flag: this.Flag
    }
  }
}

export default RecumbentBike;