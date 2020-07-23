class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.capacity !== this.passengers.length) {
            this.passengers.push(traveler)
        }
        else {
            return "No room for this passenger."
        }
    }
    shouldQuarantine() {
        let isUnhealthy = this.passengers.some(index => index.isHealthy == false)
        return isUnhealthy
    }
    totalFood() {
        let foodSum = 0
        for (let index = 0; index < this.passengers.length; index++) {
            foodSum += this.passengers[index].food
        }
        return foodSum
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2

    }
    hunt() {
        this.food = this.food + 5
    }
    eat() {
        if (this.food >= 2) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food > numOfFoodUnits) {
            this.food = this.food - numOfFoodUnits
            traveler.food = traveler.food + numOfFoodUnits
        }
    }
}