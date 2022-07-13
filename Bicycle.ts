interface BicycleConstructorParams {
  size: string;
  tapeColor?: string;
  style: string;
}

class Bicycle {
  private _size: string;
  private _tapeColor: string;
  private _style: string;

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

  public get Style() : string {
    return this._style;
  }
  public set Style(v: string) {
    this._style = v;
  }

  constructor({size, tapeColor =' ', style}: BicycleConstructorParams) {
    this._size = size;
    this._tapeColor = tapeColor;
    this._style = style;
  }

  public Spares(frontShock: string) {
    if (this.Style === 'road') {
      return {
        chain: '11-speed',
        tireSize: '23',
        tapeColor: this.TapeColor
      };
    } else {
      return {
        chain: '11-speed',
        tireSize: '2.1',
        frontShock: frontShock
      }
    }
  }
}

export default Bicycle;