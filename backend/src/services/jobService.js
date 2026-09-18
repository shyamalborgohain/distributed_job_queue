const createJob = (jobData) => {
    return{
        id: Date.now(),
        ...jobData
    };
};

module.exports = {
    createJob
};