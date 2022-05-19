const express = require("express");
const app = express();
require("./mongooseConnect.js");
const Friend = require("./friend.js");

app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/friends", async (req, res) => { // get list of all friends
  const friends = await Friend.find();
  res.json(friends);
});

app.post("/friends", (req, res) => { // post friend will add a new friend to the database
  const id = req.body.id;
  const name = req.body.name;

  const friend = new Friend({
    _id: parseInt(id),
    name: name,
  });

  friend
    .save()
    .then(() => {
      res.json(friend);
    })
    .catch((e) => {
      res.json(e);
    });
});


app.get('/friends/:id', (req, res) => {  // get a friend by id
    const _id = req.params.id;

    Friend.findById(_id).then((friend) => res.json(friend)).catch((e) => res.json(e))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
