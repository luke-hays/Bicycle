import Preparer from '../ts/interfaces/Preparer.interface';
import Customer from './Customer';
import Trip from './Trip'

class TripCoordinator implements Preparer {
  constructor() {}

  PrepareTrip(trip: Trip): void {
      this.BuyFood(trip.Customers);
  }

  private BuyFood(customers: Array<Customer>): void {
    customers.forEach((customer) => {
      console.log('Buying food for customers')
    })
  }
}

export default TripCoordinator;