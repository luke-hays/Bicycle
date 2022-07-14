import Trip from "../../Entities/Trip";

interface Preparer {
  PrepareTrip(trip: Trip): void
}

export default Preparer;
