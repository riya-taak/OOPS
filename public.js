class Student {
    constructor(name, age) {
        this.name = name; // Public
        this.age = age;   // Public
    }

    showDetails() {
        console.log(this.name);
        console.log(this.age);
    }
}

const student = new Student("Riya", 22);

// Accessing public properties
console.log(student.name);
console.log(student.age);

// Calling public method
student.showDetails();