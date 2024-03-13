const express = require('express');
const db = require("./models");
const userController = require('./contoller/users/user.controller');
const Router = require('./routes');
const { errorHandler } = require('./middleware/error.middleware');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
const prefix = process.env.NODE_ENV
const version = process.env.VERSION || "v1"

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 3000;

app.use(`/api/${prefix}/${version}`, Router)
app.use(errorHandler)

db.sequelize
  .sync({ force: false })
  .then(async () => {
    app.listen(port, () =>
      console.log(`Server listening on port ${port} in ${prefix} environment`)
    );
  })
  .catch((error) => {
    console.error("Unable to create database and tables: ", error);
  });
