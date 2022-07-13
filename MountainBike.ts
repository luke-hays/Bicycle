import Bicycle from "./Bicycle";

interface BicycleConstructorParams{
  size: string;
  tapeColor?: string;
  style: string;
}

interface MountainBikeConstructorParams extends BicycleConstructorParams {
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

  constructor({size, tapeColor =' ', style, frontShock, rearShock}: MountainBikeConstructorParams) {
    super({size: size, tapeColor: tapeColor, style: style});
    this._frontShock = frontShock;
    this._rearShock = rearShock;
  }


}

export default MountainBike;