const { Router } = require("express");
const { check, body } = require("express-validator");

const { userCreate, userRead, userShow, userUpdate, userDelete } = require("../controllers/UserController");

const router = Router();

router.post("/", check("firstName").notEmpty(), check("lastName").notEmpty(), check("email").notEmpty(), userCreate);

router.get("/", userRead);

router.get("/:id", userShow);

router.put("/:id", body("firstName").notEmpty(), body("lastName").notEmpty(), body("email").notEmpty(), userUpdate);

router.delete("/:id", userDelete);

module.exports = router;
