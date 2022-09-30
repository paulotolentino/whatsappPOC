import { getUser, setUser } from "../../users.js";

export default function (phone, message) {
  const reply = "Legal, digite o CEP que você deseja buscar.";
  setUser(phone, {
    ...getUser(phone),
    stage: { main: 2, sub: 0 },
  });
  return reply;
}
