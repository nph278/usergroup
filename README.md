# usergroup

A library for managing groups of users.

`npm install usergroup`

## Tutorial

To create a new userbase:

```javascript
const Usergroup = require("usergroup");
const users = new Usergroup();
```

You can add a group with `users.addgroup("groupname", ["permission.1", "permission.2"... ])`

You can add a user with `users.add("username", "password", "group")`

You can check for a user's permissions with `users.permission("username", "permission.name")`
