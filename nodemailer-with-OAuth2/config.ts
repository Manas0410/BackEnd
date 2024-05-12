const { SENDER_EMAIL_ADDRESS, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } =
  process.env;

export const config = {
  senderEmail: SENDER_EMAIL_ADDRESS,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN,
};
