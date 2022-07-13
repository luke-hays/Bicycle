import Bicycle from "./Bicycle";

interface MountainBikeConstructorParams {
  size: string;
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

  constructor({size, frontShock, rearShock}: MountainBikeConstructorParams) {
    super({size});
    this._frontShock = frontShock;
    this._rearShock = rearShock;
  }
}

export default MountainBike;