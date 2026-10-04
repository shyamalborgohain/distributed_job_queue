const express = require("express");

const { 
    createJob,
    getJobStatus
} = require("../controllers/jobController.js");

const router = express.Router();

// router.post("/", (req, res) => {
//     res.json({
//         message: "Job received",
//         data: req.body
//     });
// });

// Create a new job
router.post("/", createJob);

// Get job status by ID
router.get("/:id", getJobStatus);

module.exports = router;