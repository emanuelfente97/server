const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const TestimonialRoutes = require("./routes/TestimonialRoutes");

const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send({ msg: "Own API" });
});

app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);
app.use("/Testimonials", TestimonialRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`server running port is ${port}`);
  console.log("Press CTRL+C to quit");
});
