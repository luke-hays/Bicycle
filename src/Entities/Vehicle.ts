import Schedulable from "../ts/mixins/Schedulable";

interface Vehicle extends Schedulable {}

class Vehicle implements Vehicle{
  constructor() {}
}

export default Vehicle;
