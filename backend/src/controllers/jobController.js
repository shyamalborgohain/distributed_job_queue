const { createJob: createJobService } = require("../services/jobService.js");

// const createJob = (req, res) => {
//     res.json({
//         message: "Job received",
//         data: req.body
//     });
// };

const createJob = (req, res) => {
    const job = createJobService(req.body);
    res.json({
        message: "Job created",
        data: job
    });
};

module.exports = {
    createJob
};