import Schedulable from "../ts/mixins/Schedulable";

class Schedule {
  public Scheduled(schedulable: Schedulable, starting: Date, ending: Date): boolean {
    console.log(`This #${schedulable.constructor.name} is available #${starting.toLocaleDateString()} - #${ending.toLocaleDateString()}`)
    return false;
  }
}

export default Schedule;
