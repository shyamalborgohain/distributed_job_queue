const createJob = (req, res) => {
    res.json({
        message: "Job received",
        data: req.body
    });
};

module.exports = {
    createJob
};