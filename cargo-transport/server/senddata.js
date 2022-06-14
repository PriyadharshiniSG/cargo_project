const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./couchDB");
const app = express();
app.disable("x-powered-by");
const port = 8000;
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(bodyParser.json());
app.post("/signupdata", function (request, response) {
  let register1 = {
    fname: request.body.firstName,
    lname: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
    acceptTerms: request.body.acceptTerms,
    type: "user",
  };
  console.log(register1);
  db.cargo
    .insert(register1)
    .then((data) => {
      console.log("posted");
      console.log(data);
      response.send(data);
    })
    .catch((err) => {
      console.log("error");
      response.send(err);
    });

  console.log("Data Inserted..!!");
});
app.post("/bookcargo", function (request, response) {
  let bookcargo = {
    departure: request.body.departure,
    destination: request.body.destination,
    itemName: request.body.itemName,
    fullName: request.body.fullName,
    email: request.body.email,
    password: request.body.password,
    phonenumber: request.body.phonenumber,
    type: "customer-booking",
    status: "open",
    user: request.body.user,
  };
  db.cargo
    .insert(bookcargo)
    .then((data) => {
      console.log("posted");
      response.send(data);
    })
    .catch((err) => {
      console.log("error");
      response.send(err);
    });

  console.log("Data Inserted..!!");
});

app.get("/getdata", (request, response) => {
  console.log("retreived......", request.params);
  let obj = {
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
app.get("/getadmin", (request, response) => {
  console.log("retreived......", request.params);
  let obj = {
    selector: {
      type: "admin",
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
  let obj = {
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
