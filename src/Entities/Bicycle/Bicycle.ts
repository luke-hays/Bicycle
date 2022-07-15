import BicycleParams from "../../ts/interfaces/BicycleParams.interface";
import Schedulable from "../../ts/mixins/Schedulable";
import ISchedule from "../Schedule";

interface Bicycle extends Schedulable {}

abstract class Bicycle implements Bicycle{
  private _size: string;
  private _chain: string;
  private _tireSize: string;

  public get Size() : string {
    return this._size
  }

  public set Size(v : string) {
    this._size = v;
  }

  public get Chain() : string {
    return this._chain
  }

  public set Chain(v : string) {
    this._chain = v;
  }

  public get TireSize() : string {
    return this._tireSize
  }

  public set TireSize(v : string) {
    this._tireSize = v;
  }

  //Injecting Schedule dependency and providing default
  constructor({size = '', chain, tireSize, schedule = new ISchedule()}: BicycleParams) {
    this._size = size;
    this._chain = chain ?? this.DefaultChain();
    this._tireSize = tireSize ?? this.DefaultTireSize();
  }

  // Return the number of lead days before a bicycle can be scheduled
  public LeadDays(): number {
    return 1;
  }

  protected DefaultChain(): string {
    return "11-speed";
  }

  protected DefaultTireSize(): string {
    return "";
  }

  protected LocalSpares(): {} {
    return {}
  }

  public Spares() {
    return {
      chain: this.Chain,
      tireSize: this.TireSize,
      ...this.LocalSpares()
    }
  }
}

export default Bicycle;
