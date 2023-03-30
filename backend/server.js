const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json())

//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Vue CRUD app." });
});

require("./routes/ram.routes")(app);
require("./routes/type.route")(app);

const PORT = 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync().then(() => {
    console.log("Works.");
});

