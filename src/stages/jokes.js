import { getUser, setUser } from "../users.js";

export default function (phone, message) {
  if (message.toLowerCase() === "sair") {
    setUser(phone, { ...getUser(phone), stage: { main: 0 } });
    return "*Obrigado e volte sempre!*";
  }
  return fetch("https://api-charadas.herokuapp.com/puzzle?lang=ptbr")
    .then((response) => response.json())
    .then((response) => {
      setUser(phone, { ...getUser(phone), stage: { main: 1 } });
      return `${response.question}\n${response.answer}\n\n"Envie SAIR ou qualquer outra mensagem para receber outra piada.`;
    })
    .catch((err) => {
      console.log("Unable to fetch -", err);
      setUser(phone, { ...getUser(phone), stage: { main: 0 } });
      return "Oooops... Algo deu errado.";
    });
}
