const path = require("path");
const express = require("express");
// var exphbs = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundController = require("./controllers/notFound");

const app = express();

// Set Templating engine
app.use(require("express-edge"));
app.set("views", `${__dirname}/views`);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(notFoundController.notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`[Server]: Listening on port ${PORT}`));
