// https://www.npmjs.com/package/venom-bot
// https://www.youtube.com/watch?v=m1-CD2B01a4

// Supports ES6
import { create, Whatsapp } from "venom-bot";
import bot from "./src/bot.js";

create({
  session: "botwpp", // name of session
  multidevice: true, // for version not multidevice use false.(default: true)
})
  .then((client) => bot(client))
  .catch((erro) => {
    console.log(erro);
  });
