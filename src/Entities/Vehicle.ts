import Schedulable from "../ts/mixins/Schedulable";

interface Vehicle extends Schedulable {}

class Vehicle implements Vehicle{
  constructor() {}

  protected LeadDays(): number {
    return 3;
}
}

export default Vehicle;
