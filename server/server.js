// Our server.js file. The core of our server.

const express = require("express");
const app = express();
const port = 5000;

// root api route. Returns a welcome message :)
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// users api route. Returns a list of users.
app.get("/users", (req, res) => {
  res.json({
    users: [
      { id: 1, name: "Lauren", gender: "female" },
      { id: 2, name: "Jordan", gender: "male" },
      { id: 3, name: "Justin", gender: "male" },
    ],
  });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
