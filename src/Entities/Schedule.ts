import Schedulable from "../ts/interfaces/Schedulable.interface";

class Schedule {
  public Scheduled(schedulable: Schedulable, starting: Date, ending: Date): boolean {
    console.log(`This #${schedulable.class} is available #${starting} - #${ending}`)
    return false;
  }
}

export default Schedule;
