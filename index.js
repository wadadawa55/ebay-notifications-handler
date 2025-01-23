const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/ebay-notifications", (req, res) => {
    console.log("Received notification:", req.body);

    if (req.body.challengeCode) {
        return res.json({ challengeResponse: req.body.challengeCode });
    }

    res.status(200).send("Notification received");
});

app.get("/ebay-notifications", (req, res) => {
    res.send("eBay Notifications Endpoint is working!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
