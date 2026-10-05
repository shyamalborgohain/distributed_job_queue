const { jobQueue } = require("../queues/jobQueue.js");

// const createJob = (jobData) => {
//     return{
//         id: Date.now(),
//         ...jobData
//     };
// };

const createJob = async (jobData) => {
    const job = await jobQueue.add("process-job", jobData, {
        attempts: 3,
        backoff: {
            type: "exponential",
            delay: 2000
        }
    });

    return {
        id: job.id,
        type: jobData.type,
        payload: jobData.payload,
        status: "waiting"
    };
};

const getJobStatus = async (jobID) => {
    const job = await jobQueue.getJob(jobID);

    if (!job) {
        return null;
    }

    const status = await job.getState();

    return {
        id: job.id,
        status: status,
        data: job.data,
        result: job.returnvalue,
        attemptsMade: job.attemptsMade,
        failedReason: status === "failed" ? job.failedReason: null
    };
};

module.exports = {
    createJob,
    getJobStatus
};