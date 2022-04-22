const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post("/auth", (req, res) => {
    const { key } = req.body;

    // in a production app, we can instead query a DB of users to check if the key is valid
    if (key === "supersecret") {
        res.status(200).send();
        return;
    }

    res.status(403).send();
});

app.listen(8000, () => console.log("Listening on port 8000"));