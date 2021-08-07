function Mammal(iName, iAge) {
    
    this.name = iName.trim();
    this.age = iAge;
}

function Dog(iName, iAge , iRace) {
    
    Mammal.call(this, iName, iAge);
    Dog.prototype.GreetingFromDog = function() {
        return "Woof Woof";
    } 

    this.race = iRace.trim();
}

function Cat(iName, iAge , iClawLength) {

    Mammal.call(this, iName, iAge);
    Cat.prototype.GreetingFromCat = function() {
        return "Mio";
    } 

    this.clawLength  = iClawLength;
}

function Human(iName, iAge , iIQ) {

    Mammal.call(this, iName, iAge);
    Human.prototype.GreetingFromHuman = function() {
        return "Hello World";
    } 

    this.iq = iIQ;
}

function MammalFactory() {

    this.MammalCreator = function ()  {
        let mammal = undefined;
        const name = prompt("What's your name?");
        const age = prompt("What's your age?");
        const type = prompt("What are you (Dog/Cat/Human)?");

        if (type == "Dog") {
            let race = prompt("Hello Dog, What's your race?");
            mammal = new Dog(name, age, race);
        }
        else if (type == "Cat") {
            let clawLength = prompt("Hello Cat, What's your claw length?");
            mammal == new Cat(name, age, clawLength);
        }
        else if (type == "Human") {
            let iq = prompt("Hello Human, What's your IQ?");
            mammal = new Human(name, age, iq);
        }
        else {
            return null;
        }

        return mammal;
    }
}

const factory = new MammalFactory();

var res = factory.MammalCreator();



