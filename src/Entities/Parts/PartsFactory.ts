import Part from "../../ts/types/Part.type";
import Parts from "./Parts";

class PartsFactory {
  public static Build(config: Part[]) {
    const parts = config.map(element => {
      return this.CreatePart(element);
    });

    return new Parts(parts);
  }

  private static CreatePart(part: Part) {
    return {
      name: part.name,
      description: part.description,
      needsSpare: part.needsSpare ?? true
    }
  }
}

export default PartsFactory