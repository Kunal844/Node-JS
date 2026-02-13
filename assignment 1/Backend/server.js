const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE_NAME = "data.txt";

/* WRITE API */
app.post("/write", (req, res) => {
    const content = req.body.text;

    fs.writeFile(FILE_NAME, content, (err) => {
        if (err) return res.status(500).send("Error writing file");
        res.send("Data written successfully");
    });
});

/* READ API */
app.get("/read", (req, res) => {
    fs.readFile(FILE_NAME, "utf8", (err, data) => {
        if (err) return res.status(500).send("Error reading file");
        res.json({ data });
    });
});

app.listen(5000, () => {
    console.log("Server  running on port 5000 in development mode");
});
