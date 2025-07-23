//? types annotations

//todo: you need to add the types of the variables using colon(:) after the variable name
//! the editor asumes the type of the variable but is better to define it  to prevent bugs
let id: number = 5;
let company: string = "acne corp";
let isPublic: boolean = true;

// todo: if you want to add a array of a types you need to add the types follow by the square brackets([])
let ids: number[] = [1, 2, 3, 4, 5];

// todo: the any type allow you to put any type
// ! only use any on extreme scenarios or specify scenarios
let x: any = "pedro";

let xArr: any[] = ["pedro", 0, true];

//? creating functions
// functionName =(parameter:type):return types =>{}

const contactValues = (a: string, b: string): string => {
	return a + b;
};

// console.log(contactValues("hello", "world"));
// console.log(contactValues("5", "10"));

//todo: defining objects and types
//! dont let ts asume anything and tell the types of the object fiel using (interface)

/* 
interface interFaceName {
    
}
*/

interface userInterface {
	id: number;
	name: string;
	age?: number;
	greet(message: string): void;
}

// assigning the interfase to this object
// const  objectName : interface = {}

const user: userInterface = {
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

//todo : union(|) lets a variable have multiple types

//! type definition

//* use the key word type (type definition || type alias )
// type typename = typeValue( string , number , boolean, )
// ! unions are to say either or(can be either this or that )
type iDFieldType = string | number; //re usable

const printID = (id: iDFieldType): void => {
	console.log(id);
};

// printID("11");

// todo: interceptions(&)

//? interception work like unions but are mode for interfaces

interface BusinessPartner {
	// this is for a specific type of business in out db
	name: string;
	creditScore: number;
}

interface userIdentity {
	//contains the id and email of a use
	id: number;
	email: string;
}

//! interceptions are use  to combine different interfaces
type Employee = BusinessPartner & userIdentity;

const singContract = (employee: Employee): void => {
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

enum LoginErrors {
	Unauthorized = "unauthorized",
	NoUser = "noUser",
	WrongCredentials = "wrongCredentials",
	Internal = "internal",
}

const printErrorMSG = (error: LoginErrors): void => {
	if (error === LoginErrors.Unauthorized) console.log("no authorization");
	else if (error === LoginErrors.NoUser) console.log("no user was found");
	else if (error === LoginErrors.WrongCredentials) console.log("wrong credentials");
	else console.log("internal error");
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

class StorageContainer<T> {
	private contents: T[];

	constructor() {
		this.contents = [];
	}

	addItem(item: T): void {
		this.contents.push(item);
	}

	getItem(idx: number): T | undefined {
		return this.contents[idx];
	}
}

// think of t as a parameter that can be any type that you want fort the instance of the class
const usernames = new StorageContainer<string>();

usernames.addItem("LenddyM");
usernames.addItem("pedroTech");
// console.log(usernames.getItem(0));

const friendsCount = new StorageContainer<number>();

friendsCount.addItem(23);
friendsCount.addItem(678);
// console.log(friendsCount.getItem(0));

// todo: read only variable (tuples(inmutable variables))

// inside of a interface , enum you can use the key word readonly  and that make the variable (tuple)inmutable

interface EmployeeInterface {
	readonly employeeId: number;
	startDate: Date;
	readonly name: string;
	department: string;
}

const employee: EmployeeInterface = {
	employeeId: 123,
	startDate: new Date(),
	name: "lenddy",
	department: "finance",
};

console.log(employee.name);
