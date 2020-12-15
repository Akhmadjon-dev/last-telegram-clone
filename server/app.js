const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);
const { name, password } = require("./configs/key");
// const compression = require("compression");

const isLoggedIn = require("./utils/index").authHandler;

const port = process.env.PORT || 8888;

// const database = 'mongodb://localhost/pos';
const database = `mongodb+srv://${name}:${password}@telegram-clone.sziym.mongodb.net/telegram?retryWrites=true&w=majority`;

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/user");
const messageRouter = require("./routes/message");
const contactRouter = require("./routes/contact");

const app = express();

const corsOptions = {
  credentials: true,
  origin: true,
};
app.use(express.static(path.join(__dirname, "public")));
// app.use(compression());
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = new MongoStore({
  url: database,
  autoRemove: "interval",
  autoRemoveInterval: 1,
});
app.use(
  session({
    secret: "mahfiy kalitni topa olmaysiz",
    resave: true,
    saveUninitialized: true,
    store,
  })
);

app.use(isLoggedIn);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/message", messageRouter);
app.use("/contact", contactRouter);

mongoose
  .connect(database, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log("Database loaded successfully");
  })
  .catch((err) => console.log(err));

app.listen(port, () =>
  console.log(`App is running on server localhost:${port}`)
);
module.exports = app;
