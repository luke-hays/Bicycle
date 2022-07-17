import PartsParams from "../../ts/interfaces/PartsParams.interface";
import Part from "./Part";

interface params {
  parts: Array<Part>
}

class Parts extends Array<Part> {
  // private _parts: Array<Part>;

  // public get Parts() : Array<Part> {
  //   return this._parts;
  // }
  
  // public set Parts(v : Array<Part>) {
  //   this._parts = v;
  // }

  constructor({parts = new Array<Part>}: params) {
    super();
    parts.forEach(part => {
      this.push(part);
    });
  }

  public Spares() {
    return this.filter((part) => {
      if (part.NeedsSpare) return part;
    })
  }
}

export default Parts;