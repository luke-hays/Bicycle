import Trip from "./Trip";
import Bicycle from "./Bicycle";
import Preparer from "./ts/interfaces/Preparer.interface";

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
