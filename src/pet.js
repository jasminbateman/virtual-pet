const MAX_FITNESS = 10;
const MIN_FITNESS = 0;
const MIN_AGE = 0;
const MIN_HUNGER = 0;
const hungryString = "I am hungry";
const unfitString = "I need a walk";
const neglectedString = "I am hungry AND I need a walk";
const happyString = "I feel great!";

function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },

    growUp: function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness < MIN_FITNESS) {
        this.fitness = MIN_FITNESS;
        }
    },
    walk: function () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        }
        if((this.fitness + 4) <= MAX_FITNESS ) {
            this.fitness += 4;
        } else {
            this.fitness = MAX_FITNESS;
        }
    },
    feed: function () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } 
        if((this.hunger - 3) >= MIN_HUNGER ) {
            this.hunger -= 3;
        } else {
            this.hunger = MIN_HUNGER;
        }
    },
    checkUp: function () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        } 
        if(((this.fitness <=3) && (this.hunger >= 5))) {
            return neglectedString;
        } else if(this.hunger >= 5) {
            return hungryString;
        } else if(this.fitness <= 3) {
            return unfitString;
        } else {
            return happyString;
        }
    },
    haveBaby: function (name){
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        }
        this.children.push(new Pet(name))
    },
}

module.exports = Pet;