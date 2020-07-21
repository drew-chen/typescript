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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "bob",
    age: 7,
    hobbies: ['basketball', 'badminton'],
    role: Role.ADMIN
};
// person.role[1] = 10;
// person.role.push('admin'); // allowed for tuple
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); //TS knows that hobby is a string.
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
