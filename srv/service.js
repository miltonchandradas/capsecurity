const cds = require("@sap/cds");
const jwtDecode = require("jwt-decode");
const { nextTick } = require("process");

module.exports = async (srv) => {
  const { Suppliers } = srv.entities;

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };


  // srv.before("*", (req) => {
  //   console.log("JWT Token: ", req.headers.authorization);
  // });

  srv.on("longRunningAction", async (req) => {
    await delay(45000);
    return "Long running action is complete..."
  })

  srv.on("READ", Suppliers, async (req, next) => {
    await delay(45000);
    return await next();
  });

};
