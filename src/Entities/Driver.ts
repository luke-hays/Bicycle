import Preparer from "../ts/interfaces/Preparer.interface";
import Trip from "./Trip";
import Vehicle from "./Vehicle";

class Driver implements Preparer {
  constructor() {}

  PrepareTrip(trip: Trip): void {
      this.GasUp(trip.Vehicle);
      this.FillWaterTank(trip.Vehicle);
  }

  private GasUp(vehicle: Vehicle): void {
    console.log('Gassing up vehicle...')
  }

  private FillWaterTank(vehicle: Vehicle): void {
    console.log('Filling up water tank...')
  }
}

export default Driver;