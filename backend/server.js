const path = require("path");
const express = require("express");
const createError = require("http-errors");
const requestTime = require("./middleware/request-time");


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.use(requestTime);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "static")));

const rootRoutes = require("./routes/root");

app.use("/", rootRoutes);

/** Existing server.js content **/
app.use((request, response, next) => {
next(createError(404));
});


app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});