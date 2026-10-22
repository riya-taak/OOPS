class Car {
    start() {
        this.#checkEngine();
        console.log("Car started");
    }

    #checkEngine() {
        console.log("Checking engine...");
    }
}

const car = new Car();




// Hide internal complexity