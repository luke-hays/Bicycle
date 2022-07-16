import ISchedule from "../../Entities/Schedule";

abstract class Schedulable {
  private _schedule: ISchedule = new ISchedule();
  
  public get Schedule(): ISchedule {
    if (!this._schedule) {
      this._schedule = new ISchedule();
    }
    return this._schedule;
  }

  // Return true if bicycle is availabe during this interval
  public Schedulable(starting: Date, ending: Date): boolean {
    return this.Scheduled(starting, ending);
  }

  // Return schedule's answer
  public Scheduled(starting: Date, ending: Date): boolean {
    const d = new Date()
    d.setDate(starting.getDate() - (this.LeadDays() as number));
    return this.Schedule.Scheduled(this, d, ending);
  }

  protected abstract LeadDays(): {}
}

export default Schedulable