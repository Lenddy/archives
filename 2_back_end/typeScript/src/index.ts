//  you can use everything that you know from js in ts
// you just need to go to the terminal and type tsc fileName to compile it to js so it runs 

console.log('hello world');

// to create a configuration file for ts you need ot type tsc --init


// to declare a type you need to use : colon after a variable name 
let age: number = 20;

if(age < 50){
    age += 10;
}

console.log(age)