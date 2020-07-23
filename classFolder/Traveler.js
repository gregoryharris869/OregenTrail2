class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food = this.food + 2
    }
    eat() {
        if (this.food > 0) {
            this.food = this.food - 1

        }
        else {
            this.isHealthy = false
        }
    }
}

class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}