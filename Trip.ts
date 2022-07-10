class Trip {
    private _bicycles: Array<Bicycle>;
    private _customers: Array<Customer>;
    private _vehicle: Vehicle;

    constructor() {
        this._bicycles = [""];
        this._customers = [""];
        this._vehicle = ""
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

    public Prepare(preparers: Array<Mechanic | Driver | TripCoordinator>) {
        preparers.forEach((preparer) => {
            if (preparer instanceof Mechanic) {
                preparer.PrepareBicycles(this.Bicycles);
            } else if (preparer instanceof Driver) {
                preparer.GasUp(this.Vehicle);
                preparer.FillWaterTank(this.Vehicle)
            } else if (preparer instanceof TripCoordinator) {
                preparer.BuyFood(this.Customers);
            }
        })
    }
}

class Mechanic {
    constructor() {}

    public PrepareBicycle(bicycle: Bicycle): void {
        console.log(`Preparing bicycle ${bicycle}`);
    }

    public PrepareBicycles(bicycles: Array<Bicycle>): void {
        bicycles.forEach(bicycle => {
            this.PrepareBicycle(bicycle);
        });
    }
}

class TripCoordinator {
    constructor() {}

    public BuyFood(customers: Array<Customer>): void {}
}

class Driver {
    constructor() {}

    public GasUp(vehicle: Vehicle): void {}
    public FillWaterTank(vehicle: Vehicle): void {}
}

class Customer {
    constructor() {}
}

class Bicycle {
    constructor() {}
}

class Vehicle {
    constructor() {}
}