const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

// ROUTER
const testRouter = require("./routes/testRoute");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const resturantRouter = require("./routes/resturantRoute");
const categoryRouter = require("./routes/categoryRoute");
const foodRouter = require("./routes/foodRoute");

const app = express();

// dotenv
const dotenv = require("dotenv");
dotenv.config();

// mongo connection
const dbConnect = require("./config/db");
dbConnect();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/resturant", resturantRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/food", foodRouter);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to food server</h1>");
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`.bgBlue.white);
});
