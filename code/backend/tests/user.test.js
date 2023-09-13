const express = require("express");
const mongoose = require("mongoose");
const request = require("supertest");
const app = express();

require("dotenv").config();

app.use(express.json());

// Routes
app.use(require("../routes/userRoutes"));

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /signup", () => {
  it("should return 400 if user already exists", async () => {
    const res = await request(app).post("/signup").send({
      firstName: "Test",
      lastName: "User",
      password: "password",
      email: "johndoe@gmail.com",
    });
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("User already exists!");
  });
});

describe("POST /login", () => {
  it("should return a user with a token", async () => {
    const res = await request(app).post("/login").send({
      email: "johndoe@gmail.com",
      password: "password",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty("firstName");
  });

  it("should return 400 if email is incorrect", async () => {
    const res = await request(app).post("/login").send({
      email: "incorrect@gmail.com",
      password: "password",
    });
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Incorrect credentials!");
  });

  it("should return 400 if password is incorrect", async () => {
    const res = await request(app).post("/login").send({
      email: "johndoe@gmail.com",
      password: "password2",
    });
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe("Incorrect credentials!");
  });
});
