const express = require("express");

const { createJob } = require("../controllers/jobController.js");

const router = express.Router();

// router.post("/", (req, res) => {
//     res.json({
//         message: "Job received",
//         data: req.body
//     });
// });

router.post("/", createJob);

module.exports = router;