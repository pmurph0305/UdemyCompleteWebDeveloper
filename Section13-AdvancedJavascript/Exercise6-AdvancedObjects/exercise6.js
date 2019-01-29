//Evaluate these:
//#1
[2] === [2]; // false
{} === {} // false

//#2 what is the value of property a for each object. indivudal line, after all ran
const object1 = { a: 5 }; // 5 , 4
const object2 = object1;  // 5 , 4
const object3 = object2;  // 5 , 4
const object4 = { a: 5};  // 5 , 5
object1.a = 4; // 4 , 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


// also made cow a class, and added more console stuff to learn.
class Animal {
    constructor(name, type) {
        console.log('cAnimal', this);
        this.name = name;
        this.type = type;
    }
    sound() {
        console.log('animal', this);
        console.log(`I am ${this.name}, I'm a ${this.type}`);
    }
};

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type);
        console.log('cMammal', this);
        this.color = color;
    }
    sound() {
        super.sound();
        console.log('mammal', this);
        console.log(`I am ${this.color}`);
    }
};

class Cow extends Mammal {
    constructor(name, type, color) {
        super(name, type, color);
        console.log('cCow', this);
    }
    sound() {
        console.log('cow', this);
        console.log("First, Moo!");
        super.sound();
        console.log("Also, MOO!");
    }
}

const cow = new Cow("Billy", "MooType", "Orange");
cow.sound();