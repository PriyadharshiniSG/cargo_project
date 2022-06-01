const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./couchdb");
const app = express();
const port = 8000;
app.use(express.static("public"));
app.use(bodyParser.json());
// var urlParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static("public"));
// app.get("/", function (request, response) {
//   response.sendFile(`${__dirname}/register.html`);
// });
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.post("/send", function (request, response) {
  var register = {
    title: request.body.title,
    fname: request.body.firstName,
    lname: request.body.lastName,
    // dob: request.body.dob,
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    acceptTerms: request.body.acceptTerms,
    type: "user",
  };
  //   console.log(`${fname}   ${lname}`)
  db.cargo.insert(register);

  console.log("Data Inserted..!!");
});
app.post("/book", function (request, response) {
  var bookcargo = {
    departure: request.body.departure,
    destination: request.body.destination,
    fullName: request.body.fullName,
    // dob: request.body.dob,
    email: request.body.email,
    password: request.body.password,
    phonenumber: request.body.phonenumber,
    type: "customer-booking",
  };
  //   console.log(`${fname}   ${lname}`)
  db.cargo.insert(bookcargo);

  console.log("Data Inserted..!!");
});
app.get("/getdata", (request, response) => {
  console.log("retreived......", request.params);
  var obj = {
    selector: {
      type: "user",
    },
  };
  db.cargo
    .find(obj)
    .then((data) => {
      response.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});
app.get("/getbookingdata", (request, response) => {
  console.log("retreived......", request.params);
  var obj = {
    selector: {
      type: "customer-booking",
    },
  };
  db.cargo
    .find(obj)
    .then((data) => {
      response.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
