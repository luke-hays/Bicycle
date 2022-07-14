import Preparer from "../ts/interfaces/Preparer.interface";
import Bicycle from "./Bicycle/Bicycle";
import Trip from "./Trip";

class Mechanic implements Preparer {
  constructor() {}

  PrepareTrip(trip: Trip): void {
      this.PrepareBicycles(trip.Bicycles);
  }

  private PrepareBicycles(bicycles: Array<Bicycle>): void {
      bicycles.forEach(bicycle => {
          this.PrepareBicycle(bicycle);
      });
  }

  private PrepareBicycle(bicycle: Bicycle): void {
      console.log(`Preparing bicycle ${bicycle}`);
  }
}

export default Mechanic;
