const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./database/db");
const userRouter = require("./routes/userRoute");
const doctorRouter = require("./routes/doctorRoute");
const appointRouter = require("./routes/appointmentRoute");
const path = require("path");
const notificationRouter = require("./routes/notificationRoute");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use(express.static(path.join(__dirname, "./Docte-frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Docte-frontend/build/index.html"));
});

app.listen(port, () => {console.log("Running successfully");});
