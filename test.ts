// classes
// attributes
// access class attributes by usint "this"
// class attributes are public by difault

/** 
 * @description - first way to create private attributes

    private name;
    private age; 
    constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    }

/** 
 * @description - second way to create private attributes using constructor

    constructor(private name: string, private age: number) {}

*/

class Person {
    constructor(private name: string, private age: number) { }
    getSummary() {
        return `my name is ${this.name}, and my age is ${this.age}`
    }
}

const alejo = new Person('alejo', 28)
console.log(alejo.getSummary());
console.log(alejo);
    