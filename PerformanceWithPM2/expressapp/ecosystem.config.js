module.exports = {
  apps: [
    {
      name: "NodeServer",
      script: "npm",
      automation: false,
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
