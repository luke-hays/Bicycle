interface p {
  size: string;
}

abstract class Bicycle {
  private _size: string;

  public get Size() : string {
    return this._size
  }
  public set Size(v : string) {
    this._size = v;
  }

  constructor({size}: p) {
    this._size = size;
  }
}

export default Bicycle;