const express = require("express");
const app = express();
const axios = require('axios');
const { connection } = require("./db");
const { gorestModel } = require("./model/gorest.model.js");

require("dotenv").config();
const cors = require("cors");
app.use(express.json())
app.use(cors())

app.get("/", async (req, res) => {
    try {
        const gorest = await gorestModel.find({})
        return res.send({ gorest })
    } catch (err) {
        res.send({ "msg": err })
    }
})

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected");
    } catch (err) {
        console.log("ERROR:", err);
    }
    console.log("Port running at 8080");
})