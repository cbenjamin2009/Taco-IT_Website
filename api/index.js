const { createRequestHandler } = require("@remix-run/vercel");

module.exports = createRequestHandler({
  build: require("./_build"),
  mode: process.env.NODE_ENV
});
