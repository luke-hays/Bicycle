import Parts from "../../Entities/Parts/Parts";
import Schedule from "../../Entities/Schedule";

interface BicycleParams {
  size?: string;
  schedule?: Schedule;
  parts: Parts;
}

export default BicycleParams