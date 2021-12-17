const { Worker } = require("worker_threads");

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./DDoS.js", { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(
          new Error(`Stopped the Worker Thread with the exit code: ${code}`)
        );
    });
  });
}

async function run(n) {
  const result = await runService(`DDoS Attacker #${n}`);
  console.log(result);
}


run(1).catch((err) => console.error(err));
