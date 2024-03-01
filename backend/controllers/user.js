const User = require("../models/user");

exports.createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const [{ insertId }] = await connection.promise().query("INSERT INTO users set ?", user);
        res.status(200).json("User Created");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.readUser = async (req, res) => {
    try {
        const data = await connection.promise().query("SELECT * FROM users");
        res.status(200).json(data[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.showUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await connection.promise().query("SELECT *  from users where _id = ?", [id]);
        res.status(200).json(data[0][0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { user } = req.body;
        await connection.promise().query("UPDATE users SET ? WHERE _id = ?", [user, id]);
        res.status(200).json("User updated");
    } catch (err) {
        res.status(500).json(err.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await connection.promise().query("DELETE FROM users WHERE _id = ?", [id]);
        res.status(200).json("User deleted");
    } catch (error) {
        res.status(500).json(error.message);
    }
};
