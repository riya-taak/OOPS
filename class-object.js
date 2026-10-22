class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name + " is studying");
    }

    introduce() {
        console.log(
            "My name is " + this.name + 
            " and my age is " + this.age
        );
    }
}

// Creating objects
const student1 = new Student("Riya", 22);
const student2 = new Student("Neha", 21);

// Accessing properties
console.log(student1.name);
console.log(student2.age);

// Calling methods
student1.study();
student2.study();

student1.introduce();
student2.introduce();