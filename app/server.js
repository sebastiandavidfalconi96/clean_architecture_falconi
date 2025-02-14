const express = require("express");
const bookRoutes = require("./infrastructure/routes/bookRoutes");
const authorRoutes = require("./infrastructure/routes/authorRoutes");
const app = express();
app.use(express.json());
app.use("/api", bookRoutes);
app.use("/api", authorRoutes);
app.listen(3000, () => console.log("Server running on port 3000"));