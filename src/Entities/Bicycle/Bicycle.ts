import BicycleParams from "../../ts/interfaces/BicycleParams.interface";
import Schedulable from "../../ts/mixins/Schedulable";
import Parts from "../Parts/Parts";

interface Bicycle extends Schedulable {}

class Bicycle implements Bicycle {
  private _size: string;
  private _parts: Parts;

  public get Size() : string {
    return this._size
  }

  public set Size(v : string) {
    this._size = v;
  }

  public get Parts() : Parts {
    return this._parts
  }

  public set Parts(v : Parts) {
    this._parts = v;
  }

  //Injecting Schedule dependency and providing default
  constructor({size = '', parts}: BicycleParams) {
    this._size = size;
    this._parts = parts;
  }

  // Return the number of lead days before a bicycle can be scheduled
  protected LeadDays(): number {
    return 1;
  }

  public Spares(): {} {
    return this.Parts.Spares();
  }
}

export default Bicycle;
