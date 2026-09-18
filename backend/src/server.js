const express = require("express");

const jobRoutes = require("./routes/jobRoutes.js");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.use("/api/jobs", jobRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});