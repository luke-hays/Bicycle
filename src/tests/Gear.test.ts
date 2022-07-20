import Gear from "../Entities/Gear";
import Wheel from "../Entities/Wheel";

import DiameterDouble from "./stubs/DiameterDouble";

describe('Gear class has public interface' , () => {
  test('that can calculate gear inches', () => {
    const gear = new Gear({chainring: 52, cog: 26, wheel: new DiameterDouble()});
    expect(gear.GearInches()).toEqual(20);
  });
})
