import { options } from "../options.js";
import { getUser, setUser } from "../users.js";

export default function (phone, message) {
  // console.log(`called execute`);
  const welcome = "Olá, seja bem vindo.";
  let menu = "O que deseja fazer?\n\n";

  Object.keys(options).forEach((value) => {
    const option = options[value];
    menu += `${value} - ${option.label}\n`;
  });

  const verifyStage = "verify-stage";
  setUser(phone, { ...getUser(phone), stage: { main: verifyStage } });
  return [welcome, menu];
}
