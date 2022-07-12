interface BicycleConstructorParams {
  size: string;
  tapeColor: string;
}

class Bicycle {
  private _size: string;
  private _tapeColor: string;

  public get Size() : string {
    return this._size
  }
  public set Size(v : string) {
    this._size = v;
  }

  public get TapeColor() : string {
    return this._tapeColor;
  }
  public set TapeColor(v: string) {
    this._tapeColor = v;
  }

  constructor({size, tapeColor}: BicycleConstructorParams) {
    this._size = size;
    this._tapeColor = tapeColor;
  }

  public Spares() {
    return {
      chain: '11-speed',
      tireSize: '23',
      tapeColor: this.TapeColor
    };
  }
}

export default Bicycle;