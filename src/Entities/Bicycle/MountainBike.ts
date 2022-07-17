import Bicycle from "./Bicycle";
import BicycleParams from "../../ts/interfaces/BicycleParams.interface";

class MountainBike extends Bicycle {
  constructor({size, parts}: BicycleParams) {
    super({size, parts});
  }
}

export default MountainBike;