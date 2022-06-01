// const connection = require("express");
// const bodyparser = require("body-parser");
// const app = connection();
// const port = 8000;
// const cors = require("cors");
// const dbconnection = require("./name");
// const { response } = require("express");
// const { request } = require("express");
// app.use(connection.static("public"));
// app.use(bodyparser.json());
// app.use(
//   cors({
//     origin: "http://localhost:4200",
//   })
// );
// app.post("/post", (request, response) => {
//   console.log(request);
//   var object = {
//     name: request.body.name,
//   };
//   dbconnection.add(object, "cargo_database").then((res) => {
//     if (res) {
//       response.send(res);
//     } else {
//       response.send("error");
//     }
//   });
// });
// app.listen(port, (err) => {
//   if (err) {
//     return console.log("something bad happened", err);
//   }

//   console.log(`server is listening on http://localhost:${port}`);
// });
