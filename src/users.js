export const users = {};

export const getUser = (phone) => {
  // console.log("users", users);
  const now = new Date().getTime();
  let user = users[phone];
  if (!user || user.expireAt < now) {
    user = { stage: { main: 0 } };
  }
  const oneHour = 3600000;
  const oneHourFromNow = now + oneHour;
  user.expireAt = oneHourFromNow;
  setUser(phone, user);
  // console.log("*******\n", user, "\n*******");
  return user;
};

export const setUser = (phone, user) => {
  users[phone] = user;
};
