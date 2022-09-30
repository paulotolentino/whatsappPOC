import bot from "./src/bot.js";

const messages = ["oi", "1", "outra", "sair", "oi"];
// const messages = ["oi", "2", "13059619", "oi"];

const message = {
  isGroupMsg: false,
  from: "5519993713494@c.us",
};

let timer = 0;

const client = {
  sendText: (to, text) => {
    console.log(to, text);
  },
  events: new Map(),
  onMessage: (cb) => {
    const oldEvents = client.events.get("message");
    if (client.events.has("message")) {
      return client.events.set("message", [...oldEvents, cb]);
    }
    return client.events.set("message", [cb]);
  },
  setMessage: (data) => {
    const myListeners = client.events.get("message");
    if (Array.isArray(myListeners) && myListeners.length) {
      myListeners.forEach((event) => {
        setTimeout(() => {
          console.log(data.body);
          event(data);
        }, timer);
        timer += 5000;
      });
    }
  },
};

function index() {
  bot(client);
  for (const m of messages) {
    client.setMessage({ ...message, body: m });
  }
}

index();
