const { 
    createJob: createJobService,
    getJobStatus: getJobStatusService }
    = require("../services/jobService.js");

// const createJob = (req, res) => {
//     res.json({
//         message: "Job received",
//         data: req.body
//     });
// };

// const createJob = (req, res) => {
//     const job = createJobService(req.body);
//     res.json({
//         message: "Job created",
//         data: job
//     });
// };

const createJob = async (req, res) => {
    try {
        const job = await createJobService(req.body);

        res.status(201).json({
            message: "Job created",
            data: job
        });
    } catch (error) {
        console.error("Error creating job:", error);

        res.status(500).json({
            message: "Failed to create job"
        });
    }
};

const getJobStatus = async (req, res) => {
    try {
        const job = await getJobStatusService(req.params.id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            data: job
        });
    } catch (error) {
        console.error("Error fetching job", error);

        res.status(500).json({
            message: "Failed to fetch job status"
        });
    }
};

module.exports = {
    createJob,
    getJobStatus
};