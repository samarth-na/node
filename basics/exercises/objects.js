const person = {
	name: ["Bob", "Smith"],
	name: {
		first: "Bob",
		last: "Smith",
	},
	age: 32,

	bio: function () {
		console.log(
			`${this.name[0]} ${this.name[2]} is ${this.age} years old.`
		);
	},
	introduceSelf: function () {
		console.log(`Hi! I'm ${this.name[0]}.`);
	},
};
console.log(person);

person.bio();
person.introduceSelf();

const myObject = {
	city: "Madrid",
	greet() {
		console.log(`Greetings from ${this.city}`);
	},
};

myObject.greet(); // Greetings from Madrid

const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
	console.log("something else!");
};

myDate.getTime(); // 'something else!'
