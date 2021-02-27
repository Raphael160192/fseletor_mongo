const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://localhost:/fseletro", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connect on");
    })
    .catch((error) => {
      console.log(`error connection${error}`);
    });
}


module.exports = connect()