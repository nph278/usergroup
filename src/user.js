const hash = require("./sha");

class User {
  constructor(username, password, group) {
    this.username = username;
    this.password = hash(password);
    this.permissions = {};
    this.group = group;
  }

  is(username) {
    return this.username === username;
  }

  pass(password) {
    return this.password === hash(password);
  }

  validate(username, password) {
    return this.is(username) && this.pass(password);
  }

  permission(permission) {
    return !!this.permissions[permission];
  }

  grant(permission) {
    this.permissions[permission] = true;
  }

  revoke(permission) {
    this.permissions[permission] = false;
  }
}

module.exports = User;
