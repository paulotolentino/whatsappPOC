import { getUser, setUser } from "./users.js";
import { stages } from "./stages/index.js";

export default function bot(client) {
  client.onMessage(async (message) => {
    console.log("message", message);
    if (!message.isGroupMsg && message.from !== "status@broadcast") {
      const user = getUser(message.from);
      const verifyStage = "verify-stage";
      const verifySubStage = "verify-sub-stage";
      let stage;
      if (user.stage.main === verifyStage) {
        stage = stages[message.body];
        setUser(message.from, {
          ...getUser(message.from),
          stage: {
            main: message.body,
          },
        });
      } else if (user.stage.sub === verifySubStage) {
        stage = stages[user.stage.main][message.body];
        setUser(message.from, {
          ...getUser(message.from),
          stage: {
            main: user.stage.main,
            sub: message.body,
          },
        });
      } else if (user.stage.sub !== undefined) {
        stage = stages[user.stage.main][user.stage.sub];
      } else stage = stages[user.stage.main];
      const response = await stage.execute(message.from, message.body);
      // console.log("response", response);
      if (Array.isArray(response)) {
        response.forEach((res) => client.sendText(message.from, res));
      } else {
        client.sendText(message.from, response);
      }
    }
  });
}
