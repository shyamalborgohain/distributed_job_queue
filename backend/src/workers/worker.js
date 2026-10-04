const { Worker } = require("bullmq");

const worker = new Worker(
    "job-queue",
    async(job) => {
        console.log(`Processing job ${job.id}`);
        console.log("Job data:", job.data);

        console.log(`Sending email to ${job.data.payload.to}`);      // simulate processing an email job

        return {
            success: true,
            message: "Emailed send successfully"
        };
    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }
);

worker.on("ready", () => {
    console.log("Worker connected to Redis and ready!");
});

worker.on("active", job => {
    console.log(`Job ${job.id} is active`);
});

worker.on("completed", (job, result) => {
    console.log(`Job ${job.id} completed`);
    console.log("Result:", result);
});

worker.on("failed", (job, error)  => {
    console.log(`Job ${job.id} failed:`, error.message);
});

worker.on("error", (error) => {
    console.error("Worker error:", error)
});

console.log("Worker is starting...")