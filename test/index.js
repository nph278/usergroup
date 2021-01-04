const Usergroup = require("../src");
const usergroup = new Usergroup();

usergroup.addgroup("admin", ["everyonePermission", "adminPermission"]);
usergroup.addgroup("user", ["everyonePermission"]);

usergroup.add("test", "password123", "admin");

console.log(usergroup.group("test"));
console.log(usergroup.permission("test", "everyonePermission"));
console.log(usergroup.permission("test", "adminPermission"));

usergroup.changegroup("test", "user");

console.log(usergroup.group("test"));
console.log(usergroup.permission("test", "everyonePermission"));
console.log(usergroup.permission("test", "adminPermission"));

// console.log(usergroup.users);
// console.log(usergroup.groups);
