import Part from "../../ts/types/Part.type";
import Parts from "./Parts";

class PartsFactory {
  public static Build(config: Part[]) {
    const parts = new Parts();
    config.forEach(configPart => {
      parts.push(this.CreatePart(configPart));
    });

    return parts;
  }

  private static CreatePart(part: Part): Part {
    return {
      name: part.name,
      description: part.description,
      needsSpare: part.needsSpare ?? true
    }
  }
}

export default PartsFactory