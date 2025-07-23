"use strict";
//? types annotations
//todo: you need to add the types of the variables using colon(:) after the variable name
//! the editor asumes the type of the variable but is better to define it  to prevent bugs
let id = 5;
let company = "acne corp";
let isPublic = true;
// todo: if you want to add a array of a types you need to add the types follow by the square brackets([])
let ids = [1, 2, 3, 4, 5];
// todo: the any type allow you to put any type
// ! only use any on extreme scenarios or specify scenarios
let x = "pedro";
let xArr = ["pedro", 0, true];
//? creating functions
// functionName =(parameter:type):return types =>{}
const contactValues = (a, b) => {
    return a + b;
};
// assigning the interfase to this object
// const  objectName : interface = {}
const user = {
    id: 2,
    name: "pedro",
    age: 22,
    greet(message) {
        console.log(message);
    },
};
// console.log(user.age);
// you can do conditional statements  thx to the interface validations to see if data is null or undefine
// if (!user.age) console.log("user does not have an age");
// else console.log(user.age);
user.greet("hello");
const printID = (id) => {
    console.log(id);
};
const singContract = (employee) => {
    console.log(`contract sing by ${employee.name} with email ${employee.email}`);
};
// singContract({ name: "pedro", creditScore: 800, id: 34, email: "email@email.com" });
// todo enums
//? allow you to have a set of constan variable in one spot
/*
    enum enumSetName {
        variables ? = value
    }
*/
var LoginErrors;
(function (LoginErrors) {
    LoginErrors["Unauthorized"] = "unauthorized";
    LoginErrors["NoUser"] = "noUser";
    LoginErrors["WrongCredentials"] = "wrongCredentials";
    LoginErrors["Internal"] = "internal";
})(LoginErrors || (LoginErrors = {}));
const printErrorMSG = (error) => {
    if (error === LoginErrors.Unauthorized)
        console.log("no authorization");
    else if (error === LoginErrors.NoUser)
        console.log("no user was found");
    else if (error === LoginErrors.WrongCredentials)
        console.log("wrong credentials");
    else
        console.log("internal error");
};
// printErrorMSG(LoginErrors.WrongCredentials);
// todo generic types
// ! allows you to make safe flexible and reusable functions  ensure type safety
/*
    class className<t(placeHolder)>{
        private privateFieldName: t
        
        constructor(){
            this.privateFieldName = privateFieldNameType
        }
    }
*/
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
// think of t as a parameter that can be any type that you want fort the instance of the class
const usernames = new StorageContainer();
usernames.addItem("LenddyM");
usernames.addItem("pedroTech");
// console.log(usernames.getItem(0));
const friendsCount = new StorageContainer();
friendsCount.addItem(23);
friendsCount.addItem(678);
const employee = {
    employeeId: 123,
    startDate: new Date(),
    name: "lenddy",
    department: "finance",
};
console.log(employee.name);
