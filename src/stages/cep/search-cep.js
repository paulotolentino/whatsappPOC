import { getUser, setUser } from "../../users.js";

export default async function (phone, message) {
  const cep = message.replace(/\D/g, "");
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setUser(phone, { ...getUser(phone), stage: { main: 0 } });
      return `O endereço referente ao CEP ${response.cep} é:\n${response.logradouro}, ${response.bairro}, ${response.localidade} - ${response.uf}`;
    })
    .catch(function (err) {
      console.log("Unable to fetch -", err);
      setUser(phone, { ...getUser(phone), stage: { main: 0 } });
      return "Oooops... Algo deu errado.";
    });
}
