import { getUser, setUser } from "../users.js";

export default function (phone, message) {
  if (message.toLowerCase() === "sair") {
    setUser(phone, { ...getUser(phone), stage: { main: 0 } });
    return "*Obrigado e volte sempre!*";
  }
  return fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/brl.json"
  )
    .then((response) => response.json())
    .then((response) => `Valor do dólar hoje: ${response.brl}`);
}
