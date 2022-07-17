import Part from "../../ts/types/Part.type";

class Parts<Type extends Part> extends Array<Type> {
  constructor(...items: Type[]) {
    super();
    this.push(...items);
  }

  public Spares() {
    return this.filter(p => {
      if (p.needsSpare) return p;
    });
  }
}

export default Parts;