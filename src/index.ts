const express = require("express");
const app = express();
const dotnev = require("dotenv");
dotnev.config();
const jwt = require("jsonwebtoken");
//middlewares
app.use(express.json());

interface User {
  email: string;
  password: string;
}

let users: User[] = [{ email: "alwin@gmail.com", password: "1234" }];

const generatToken = (email: string) => {
  const token = Math.random().toString(36);
  return token;
};

app.get("/auth", (req: any, res: any) => {
  const token = req.headers["token"] as string;
  const decodedInfo = jwt.verify(token, process.env.JWT_SECRET as string);
  const user = users.find((user: any) => user.email === decodedInfo.email);

  if (!user) {
    return res.json({ message: "Invalid token" });
  }
  res.json({ message: "Valid token" });
});

app.post("/signin", (req: any, res: any) => {
  const { email, password } = req.body;

  const user = users.find((user: any) => user.email === email);

  if (!user) {
    return res.json({ message: "Invalid email" });
  }

  if (user?.password !== password) {
    res.json({ message: "Invalid password" });
  }
  const token = jwt.sign({ email }, process.env.JWT_SECRET as string);
  console.log(users);

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

  users.push({
    email,
    password,
  });

  res.json({ message: "signin done", token: "" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
