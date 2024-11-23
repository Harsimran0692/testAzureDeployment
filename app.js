import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello Azure");
});
app.get("/test", (req, res) => {
    res.send("Hello Azure Test");
});

app.listen(PORT, () => {
    console.log(`Listening at PORT: ${PORT}`);
})