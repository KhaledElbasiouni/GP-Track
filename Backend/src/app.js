import "dotenv/config";

import express from "express";
import path from "node:path";
import cors from "cors";
import bcrypt from "bcryptjs";

import * as DB from "./db/queries.js";
import jwt from "jsonwebtoken";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

// @ts-ignore
app.get("/respond", (req, res) => {
  res.json({
    message: "Backend response",
  });
});

app.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await DB.getUserWithUsername(username);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Username",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const payload = {
      id: user.id,
      username: user.username,
    };

    const secret = /** @type {string} */ (process.env.SECRET);

    jwt.sign(payload, secret, { expiresIn: "24h" }, function (err, token) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error generating token",
        });
      }

      res.json({
        token,
        user: payload,
        success: true,
        message: "Authentication successful",
      });
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      success: false,
      message: "An error occurred during authentication",
    });
  }
});

app.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const existingUser = await DB.getUserWithUsername(username);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await DB.insertUser(username, hashedPassword);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while signing up",
    });
  }
});

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../GP-Track/dist");

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
