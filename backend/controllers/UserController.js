const { validationResult } = require("express-validator");
const User = require("../models/UserModel");

const userCreate = async (req = request, res = response) => {
    const result = validationResult(req);

    if (!result.isEmpty()) return res.status(401).json({ errors: result.array() });

    const user = new User(req.body);

    try {
        const [{ insertId }] = await connection.promise().query("INSERT INTO users set ?", user);
        res.status(200).json("User Created");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const userRead = async (req = request, res = response) => {
    try {
        const data = await connection.promise().query("SELECT * FROM users");
        res.status(200).json(data[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const userShow = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const data = await connection.promise().query("SELECT *  from users where _id = ?", [id]);
        res.status(200).json(data[0][0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const userUpdate = async (req = request, res = response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) return res.status(401).json({ errors: result.array() });

    try {
        const { id } = req.params;
        const user = req.body;
        await connection.promise().query("UPDATE users SET ? WHERE _id = ?", [user, id]);
        res.status(200).json("User updated");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const userDelete = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        await connection.promise().query("DELETE FROM users WHERE _id = ?", [id]);
        res.status(200).json("User deleted");
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    userCreate,
    userRead,
    userShow,
    userUpdate,
    userDelete,
};
