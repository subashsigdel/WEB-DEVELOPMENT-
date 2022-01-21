console.log("hello i am learning function in JavaScript")


function greet(names, greetingFrist) {
    console.log(names + greetingFrist);
}
let name = " subash"
let name1 = " Ram"
let name2 = " hari"
let name3 = " shyam"
let greeting = " goodmorning"

greet(name, greeting)
greet(name1, greeting)
greet(name2, greeting)
greet(name3, greeting)


function sum(a, b, c) {
    let d = a + b + c;
    return d;

}
let returnval = sum(5, 3, 2);
console.log("The sum is " + returnval);