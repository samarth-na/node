// TypeScript Basics

// 1. Static Typing
let name: string = "John";
let age: number = 30;
let isStudent: boolean = false;

// 2. Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// 3. Tuples
let person: [string, number] = ["John", 30];

// 4. Enum
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;

// 5. Any
let notSure: any = 4;
notSure = "maybe a string instead";

// 6. Void
function logMessage(message: string): void {
	console.log(message);
}

// 7. Null and Undefined
let u: undefined = undefined;
let n: null = null;

// 8. Never
function error(message: string): never {
	throw new Error(message);
}

// 9. Object
let obj: object = { key: "value" };

// 10. Type Assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 11. Interfaces
interface Person {
	name: string;
	age: number;
}

let user: Person = { name: "John", age: 30 };

// 12. Classes
class Animal {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}

// 13. Generics
function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>("myString");

// 14. Union Types
let unionVar: number | string = 10;
unionVar = "ten";

// 15. Intersection Types
interface BusinessPartner {
	name: string;
	credit: number;
}

interface Contact {
	email: string;
	phone: string;
}

type Customer = BusinessPartner & Contact;

// 16. Type Aliases
type Point = {
	x: number;
	y: number;
};

let point: Point = { x: 10, y: 20 };
