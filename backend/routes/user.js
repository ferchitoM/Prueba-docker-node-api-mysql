const express = require("express");
const router = express.Router();
const { createUser, readUser, showUser, updateUser, deleteUser } = require("../controllers/user");

router.post("/user", createUser);

router.get("/user", readUser);

router.get("/user/:id", showUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
