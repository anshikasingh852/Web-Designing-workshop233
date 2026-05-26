 let person = {
    name: "John",
    age: 30,
    city: "New York"    
};
console.log(person);
console.log(person.name); 
console.log(person.age);    
console.log(person.city);   
typeof
console.log(typeof person); 
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]); 
console.log(numbers[2]);   
console.log(numbers[3]); 
console.log(numbers[4]); 
console.log(typeof numbers); 
let mixedarray=[1, "Hello", true, [1, 2, 3], {name: "Anshika", age: 19}];
console.log(mixedarray[0]);
console.log(mixedarray[1]);
console.log(mixedarray[2]);
console.log(mixedarray[3]);
console.log(mixedarray[4]);
console.log(numbers.length);
function greet(name) {
    console.log("Hello,World!");
    }   
    greet();
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(2, 3));
    let divide = function(a, b) {
        return a / b;
    };
console.log(divide(10, 2));
let add = function(a, b) {
    return a + b;
}
let sayHi = () => { console.log("Hi!");}
    sayHi();
let square = x => x * x;
console.log(square(4));
//map on array
let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map(x => x * x);
console.log(squaredArray);  

let evenNumbers = [1, 2, 3, 4, 5];
let filteredArray = evenNumbers.
filter(num => num % 2 === 0);
console.log(filteredEvenNumbers);

let sum=[1, 2, 3, 4, 5];
let total=sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks:92 },
    { name: "Charlie", marks: 78 }
];
//map to get marks of all students
let marks = students.map(student => student.marks);
console.log(marks);
let names = students.map(student => student.name);
console.log(names);
//filter to get students with marks greater than 80
let topStudents = students.filter(student => student.marks > 80);
console.log(topStudents);
//reduce to calculate total marks of all students
let totalMarks = students.reduce((total, student) => total + student.marks, 0);
console.log(totalMarks);
//mixed object
let mixedObject = {
    name: "Anshika",
    age: 19,
    hobbies: ["reading", "coding", "traveling"],
    address: {  
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    greet: function() {
        console.log("Hello!");
//arrow function in object
        let arrowFunction = () => {
            console.log("Hi!");
        }
    }
};
console.log(mixedObject.name);
console.log(mixedObject.age);
console.log(mixedObject.hobbies);
console.log(mixedObject.hobbies[0]); //reading
console.log(mixedObject.hobbies[1]); //coding
console.log(mixedObject.hobbies[2]); //travelling

console.log(mixedObject.address);
console.log(mixedObject.address.street); //123 Main St
console.log(mixedObject.address.city); //New York
console.log(mixedObject.address.country); //USA

mixedObject.address.greet(); //Hello!
 
//object inside array
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(people[0]); //name: "Alice", age: 25
console.log(people[1].name); //Bob 
console.log(people[2].age); //35
 
//array inside object
let company = {
    name: "Tech Corp",
    employees: ["Alice", "Bob", "Charlie"]
};
console.log(company.name); //Tech Corp
console.log(company.employees); //["Alice", "Bob", "Charlie"]
console.log(company.employees[0]); //Alice
console.log(company.employees[1]); //Bob
console.log(company.employees[2]); //Charlie