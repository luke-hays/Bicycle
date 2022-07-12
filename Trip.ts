import Bicycle from "./Bicycle";
import Preparer from "./ts/interfaces/Preparer.interface";

class Trip {
    private _bicycles: Array<Bicycle>;
    private _customers: Array<Customer>;
    private _vehicle: Vehicle;

    constructor() {
        this._bicycles = [];
        this._customers = [];
        this._vehicle = new Vehicle();
    }

    get Bicycles() {
        return this._bicycles;
    }
    set Bicycles(value) {
        this._bicycles = value;
    }
 
    get Customers() {
        return this._customers;
    }
    set Customers(value) {
        this._customers = value;
    }
    
    get Vehicle() {
        return this._vehicle;
    }
    set Vehicle(value) {
        this._vehicle = value;
    }

    public Prepare(preparers: Array<Preparer>) {
        //This code is more flexible and utilizes polymorphism to eliminate the conditional logic
        //Instead of needing knowledge of the classes, Trip just needs to know the interface implemented by each class
        //That contains behavior "prepare_trip"
        preparers.forEach(preparer => {
            preparer.PrepareTrip(this);
        });

        // This code is inflexible and relies too much on Trip's awareness of its dependences
        // preparers.forEach((preparer) => {
        //     if (preparer instanceof Mechanic) {
        //         preparer.PrepareBicycles(this.Bicycles);
        //     } else if (preparer instanceof Driver) {
        //         preparer.GasUp(this.Vehicle);
        //         preparer.FillWaterTank(this.Vehicle)
        //     } else if (preparer instanceof TripCoordinator) {
        //         preparer.BuyFood(this.Customers);
        //     }
        // })
    }
}

export default Trip;