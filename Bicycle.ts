import BicycleParams from "./ts/interfaces/BicycleParams.interface";

abstract class Bicycle {
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

  constructor({size = '', chain, tireSize}: BicycleParams) {
    this._size = size;
    this._chain = chain ?? this.DefaultChain();
    this._tireSize = tireSize ?? this.DefaultTireSize();
  }

  protected DefaultChain(): string {
    return "11-speed";
  }

  protected DefaultTireSize(): string {
    return "";
  }

  protected Spares() {
    return {
      chain: this.Chain,
      tireSize: this.TireSize,
    }
  }
}

export default Bicycle;