const { workerData, parentPort } = require("worker_threads");
const createMqttClient = require("./Client");

const client = createMqttClient();

const amount = Array(10000000);

amount.forEach(() =>
  setInterval(() => {
    client.publish("/api/bookings/available");
  })
);
parentPort.postMessage({ fileName: workerData, status: "Done" });
