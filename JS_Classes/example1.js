
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log("name: " + this.name + ", age: " + this.age);
    }
}

let student1 = new Student('Patrick', 20);
let student2 = new Student('Wyatt', 20);

let students = [];
students.push(student1);
students.push(student2);

students.forEach(student => student.displayDetails());
