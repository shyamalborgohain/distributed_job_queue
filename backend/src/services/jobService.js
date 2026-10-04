const { jobQueue } = require("../queues/jobQueue.js");

// const createJob = (jobData) => {
//     return{
//         id: Date.now(),
//         ...jobData
//     };
// };

const createJob = async (jobData) => {
    const job = await jobQueue.add("process-job", jobData);

    return {
        id: job.id,
        type: jobData.type,
        payload: jobData.payload,
        status: "waiting"
    };
};

module.exports = {createJob};