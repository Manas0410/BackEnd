const exp = require("express");
const app = exp();
port = 8001;

app.get(`/`, (req, res) => {
  res.status(200).json({
    message: `Express server is running`,
  });
});

const startServer = () => {
  try {
    console.log(process.env.NAME);

    app.listen(port, () => {
      console.log(`Express server started at port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
//  node --env-file=.env server.js
