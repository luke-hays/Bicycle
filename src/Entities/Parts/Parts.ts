import PartsParams from "../../ts/interfaces/PartsParams.interface";

abstract class Parts {
  private _chain: string;
  private _tireSize: string;

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

  constructor({chain, tireSize}: PartsParams) {
    this._chain = chain ?? this.DefaultChain();
    this._tireSize = tireSize ?? this.DefaultTireSize();
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

export default Parts;