import Bicycle from "./Bicycle";
import BicycleParams from "../../ts/interfaces/BicycleParams.interface";

interface params extends BicycleParams {
  frontShock: string;
  rearShock: string;
}

class MountainBike extends Bicycle {
  private _frontShock: string;
  private _rearShock: string;

  public get FrontShock() : string {
    return this._frontShock;
  }

  public set FrontShock(v: string) {
    this._frontShock = v;
  }

  public get RearShock() : string {
    return this._rearShock;
  }
  
  public set RearShock(v: string) {
    this._rearShock = v;
  }

  constructor({size, chain, tireSize, frontShock, rearShock}: params) {
    super({size, chain, tireSize});
    this._frontShock = frontShock;
    this._rearShock = rearShock;
  }

  protected override DefaultTireSize(): string {
    return "2.1";
  }

  protected override LocalSpares(): {} {
    return {
      frontShock: this.FrontShock
    }
  }
}

export default MountainBike;