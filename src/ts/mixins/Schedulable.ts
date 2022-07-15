import ISchedule from "../../Entities/Schedule";

class Schedulable {
  private schedule: ISchedule = new ISchedule();
  
  private Schedule(): ISchedule {
    return this.schedule ?? new ISchedule();
  }

  // Return true if bicycle is availabe during this interval
  public Schedulable(starting: Date, ending: Date): boolean {
    return this.Scheduled(starting, ending);
  }

  // Return schedule's answer
  public Scheduled(starting: Date, ending: Date): boolean {
    return this.Schedule().Scheduled(this, starting, ending);
  }

  public LeadDays(): number {
    return 0;
  }
}

export default Schedulable