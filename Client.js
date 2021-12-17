require("dotenv").config();

const mqtt = require("mqtt");

async function createMqttClient() {
  return mqtt.connect({
    clientId: "BookingsManagement",
    hostname: process.env.BROKER_URI,
    username: process.env.BROKER_USERNAME,
    password: process.env.BROKER_PASSWORD,
    protocol: "wss",
  });
}

module.exports = createMqttClient;
