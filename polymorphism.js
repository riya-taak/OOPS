class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

const dog = new Dog();
const cat = new Cat();

dog.sound(); // Dog barks
cat.sound(); // Cat meows


// Same method, different behavior