import Wheel from "../Entities/Wheel";

describe('Wheel class has public interface' , () => {
  test('that can calculate diameter', () => {
    const wheel = new Wheel({tire: 1.5, rim: 26});
    expect(wheel.Diameter()).toEqual(29);
  });
})
