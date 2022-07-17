interface params {
  name: string;
  description: string;
  needsSpare?: boolean;
}

class Part {
  private _name: string;
  private _description: string;
  private _needsSpare: boolean;


  public get Name() : string {
    return this._name;
  }
  
  public set Name(v : string) {
    this._name = v;
  }

  public get Description() : string {
    return this._description;
  }
  
  public set Description(v : string) {
    this._description = v;
  }

  public get NeedsSpare() : boolean {
    return this._needsSpare;
  }
  
  public set NeedsSpare(v : boolean) {
    this._needsSpare = v;
  }
  
  constructor({name, description, needsSpare = true}: params) {
    this._name = name;
    this._description = description;
    this._needsSpare = needsSpare;
  }
}

export default Part;
