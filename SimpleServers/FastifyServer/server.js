const fastify = require("fastify")();
const port = 8000;

fastify.get(`/`, async (req, res) => {
  res.code(200).send({ message: "fastify server started" });
});

const startServer = async () => {
  try {
    await fastify.listen(port);
    console.log(`fastify server is running on post ${port}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
