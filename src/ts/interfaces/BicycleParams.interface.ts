import Parts from "../../Entities/Parts/Parts";
import Schedule from "../../Entities/Schedule";
import Part from "../types/Part.type";

interface BicycleParams {
  size?: string;
  schedule?: Schedule;
  parts: Parts<Part>;
}

export default BicycleParams