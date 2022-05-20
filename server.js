const express = require("express");
const { chats } = require("./data/data");
require('dotenv').config()

const app = express();

app.get("/", (req, res) => {
  res.send("API is runnig");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:chatId", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.chatId);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
