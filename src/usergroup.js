const User = require("./user");

class Usergroup {
  constructor() {
    this.users = [];
    this.groups = {};
  }

  add(username, password, group) {
    if (this.user(username)) {
      return false;
    } else {
      this.users.push(new User(username, password, group));
      this.changegroup(username, group);
      return true;
    }
  }

  user(username) {
    const user = this.users.find((user) => user.is(username));
    return user || null;
  }

  permission(username, permission) {
    return this.user(username)?.permission(permission);
  }

  revoke(username, permission) {
    return this.user(username)?.revoke(permission);
  }

  grant(username, permission) {
    return this.user(username)?.grant(permission);
  }

  addgroup(group, permissions) {
    this.groups[group] = permissions;
  }

  changegroup(username, group) {
    this.user(username).permissions = {};
    this.groups[group].forEach((permission) => {
      this.user(username)?.grant(permission);
    });
    this.user(username).group = group;
  }

  group(username) {
    return this.user(username)?.group;
  }
}

module.exports = Usergroup;
