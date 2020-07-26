// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // type tuple
// } = {
// 	name: "bob",
// 	age: 7,
// 	hobbies: ['basketball', 'badminton'],
// 	role: [2, 'author'] 
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
	name: "bob",
	age: 7,
	hobbies: ['basketball', 'badminton'],
	role: Role.ADMIN
}

// person.role[1] = 10;
// person.role.push('admin'); // allowed for tuple

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase()); // TS knows that hobby is a string.
}

if (person.role === Role.ADMIN) {
	console.log('is admin'); 
}