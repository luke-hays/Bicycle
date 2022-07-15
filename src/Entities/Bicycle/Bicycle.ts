import BicycleParams from "../../ts/interfaces/BicycleParams.interface";
import ISchedulable from "../../ts/interfaces/Schedulable.interface";
import ISchedule from "../Schedule";

abstract class Bicycle implements ISchedulable {
  private _schedule: ISchedule;
  private _size: string;
  private _chain: string;
  private _tireSize: string;
  public class = 'Bicycle';

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

  public get Schedule() : ISchedule {
    return this._schedule
  }

  public set Schedule(v : ISchedule) {
    this._schedule = v;
  }

  //Injecting Schedule dependency and providing default
  constructor({size = '', chain, tireSize, schedule = new ISchedule()}: BicycleParams) {
    this._size = size;
    this._chain = chain ?? this.DefaultChain();
    this._tireSize = tireSize ?? this.DefaultTireSize();
    this._schedule = schedule;
  }

  // Return true if bicycle is availabe during this interval
  public Schedulable(starting: Date, ending: Date): boolean {
    return this.Scheduled(starting, ending);
  }

  // Return schedule's answer
  public Scheduled(starting: Date, ending: Date): boolean {
    return this.Schedule.Scheduled(this, starting, ending);
  }

  // Return the number of lead days before a bicycle can be scheduled
  private LeadDays(): number {
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