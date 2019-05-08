/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: this is referring to the global scope.
* 2. Implicit Binding: this is referring to whatever is left of the dot when calling a function
* 3. New Binding: this keyword is used to create a new object
* 4. Explicit Binding: this is referring to an object/array outside of scope using .call, .appy, or .bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(greet) {
    console.log(this);
    return greet;
}
hello('Hello');

// Principle 2

// code example for Implicit Binding
const implFunction = function (obj){
    obj.sayName = function(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    };
};

const me = {
    name: 'Brandon',
    age: 24
};

const you = {
    name: 'Mike',
    age: 44
}

implFunction(me);
implFunction(you);

me.sayName();
you.sayName();


// Principle 3

// code example for New Binding

let animal = function(color, type){
    this.color = color,
    this.type = type
    this.speak = function(){
        console.log(`I am a ${this.color} ${this.type}`)
    }
};

const dog = new animal('brown', 'dog');

dog.speak();

// Principle 4

// code example for Explicit Binding

const explFunction = function(arr1, arr2, arr3){
    console.log(`My name is ${this.name} I am ${this.age} years old and I enjoy ${arr1}, ${arr2}, and ${arr3}.`)
}

const things = ['coding', 'sleeping', 'thriving'];

explFunction.apply(me, things);