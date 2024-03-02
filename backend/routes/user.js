const express = require("express");
const { check, body } = require("express-validator");

const router = express.Router();
const { createUser, readUser, showUser, updateUser, deleteUser } = require("../controllers/user");

router.post(
    "/user",
    check("firstName").notEmpty(),
    check("lastName").notEmpty(),
    check("email").notEmpty(),
    createUser
);

router.get("/user", readUser);

router.get("/user/:id", showUser);

router.put(
    "/user/:id",
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").notEmpty(),
    updateUser
);

router.delete("/user/:id", deleteUser);

module.exports = router;
