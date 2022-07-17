import Part from "../../ts/types/Part.type";

class Parts<Type extends Part> extends Array<Type> {
  constructor(parts = new Array<Type>) {
    super();
    parts.forEach(part => {
      this.push(part);
    });
  }

  public Spares() {
    return this.filter((part) => {
      if (part.needsSpare) return part;
    })
  }
}

export default Parts;