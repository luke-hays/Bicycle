interface BicycleConstructorParams {
  size: string;
  tapeColor?: string;
  style: string;
  frontShock?: string;
  rearShock?: string;
}

class Bicycle {
  private _size: string;
  private _tapeColor: string;
  private _style: string;
  private _frontShock: string;
  private _rearShock: string;

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

  constructor({size, tapeColor =' ', style, frontShock = '', rearShock = ''}: BicycleConstructorParams) {
    this._size = size;
    this._tapeColor = tapeColor;
    this._style = style;
    this._frontShock = frontShock;
    this._rearShock = rearShock;
  }

  public Spares() {
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
        frontShock: this.FrontShock
      }
    }

  }
}

export default Bicycle;