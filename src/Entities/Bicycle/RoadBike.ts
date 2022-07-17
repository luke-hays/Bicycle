import Bicycle from "./Bicycle";
import BicylceParams from "../../ts/interfaces/BicycleParams.interface"

class RoadBike extends Bicycle {
  constructor({size, parts}: BicylceParams) {
    super({size, parts});
  }
}

export default RoadBike;