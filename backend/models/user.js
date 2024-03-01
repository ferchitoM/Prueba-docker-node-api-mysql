"user strict";

const User = function (user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.createdAt = new Date();
    this.updatedAt = new Date();
};

module.exports = User;
