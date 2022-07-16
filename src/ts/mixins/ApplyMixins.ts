import Bicycle from "../../Entities/Bicycle/Bicycle";
import Mechanic from "../../Entities/Mechanic";
import Vehicle from "../../Entities/Vehicle";
import Schedulable from "./Schedulable";

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

export function mixer() {
  applyMixins(Bicycle, [Schedulable]);
  applyMixins(Vehicle, [Schedulable]);
  applyMixins(Mechanic, [Schedulable]);
}