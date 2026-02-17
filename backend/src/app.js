const express = require("express");
const cors = require("cors");
const jugadoresRoutes = require("./routes/jugadores.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/TIENDA", (req, res) => {
  res.json({ ok: true });
});
app.use("/api/jugadores", jugadoresRoutes);
module.exports = app;