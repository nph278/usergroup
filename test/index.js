const Usergroup = require("../src");
const users = new Usergroup();

users.addgroup("admin", ["everyonePermission", "adminPermission"]);
users.addgroup("user", ["everyonePermission"]);

users.add("test", "password123", "admin");

console.log(users.group("test"));
console.log(users.permission("test", "everyonePermission"));
console.log(users.permission("test", "adminPermission"));

users.changegroup("test", "user");

console.log(users.group("test"));
console.log(users.permission("test", "everyonePermission"));
console.log(users.permission("test", "adminPermission"));

// console.log(usergroup.users);
// console.log(usergroup.groups);
