// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");

venom
  .create({
    session: "session-name", //name of session
    multidevice: true, // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    const conteUmaPiadaList = [
      "me conte uma piada",
      "me conta uma piada",
      "me conte outra piada",
      "me conta outra piada",
      "conta uma piada",
      "conte-me uma piada",
      "conte uma piada ai",
      "fala uma piada",
      "conhece alguma piada?",
      "conta outra piada",
      "conte-me outra piada",
      "conte outra piada ai",
      "fala outra piada",
      "conhece outra piada?",
      "conhece alguma outra piada?",
    ];
    if (
      conteUmaPiadaList.includes(message.body.toLowerCase()) &&
      message.isGroupMsg === false
    ) {
      console.log("message.from", message.from);
    }
  });
}
