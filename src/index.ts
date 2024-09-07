const express = require("express");
const app = express();

//middlewares
app.use(express.json());

interface User {
  email: string;
  password: string;
  token: string;
}

let users: User[] = [];

const generatToken = (email: string) => {
  const token = Math.random().toString(36);
  return token;
};

app.post("/signin", (req: any, res: any) => {
  const { email, password } = req.body;

  const user = users.find((user: any) => user.email === email);
  if (user?.password !== password) {
    res.json({ message: "Invalid password" });
  }

  const token = generatToken(email);
  user.token = token;

  res.json({ message: "signin done", token: token });
});

app.post("/signup", (req: any, res: any) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "email and password are required" });
  }

  if (users.find((user: any) => user.email === email)) {
    return res.json({ message: "email already exists" });
  }

  users.push({ email, password });

  res.json({ message: "signin done" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
