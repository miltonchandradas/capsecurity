const cds = require("@sap/cds");
const jwtDecode = require("jwt-decode");
const { nextTick } = require("process");

module.exports = async (srv) => {
  const { Suppliers } = srv.entities;

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };


  srv.before("*", (req) => {
    console.log("JWT Token: ", req.headers.authorization);
  });

  srv.on("READ", Suppliers, async (req, next) => {
    await delay(45000);
    return await next;
    // console.log("Country: ", req.user?.attr?.country);
    // let suppliers = await SELECT.from(Suppliers).where({
    //   country: req.user?.attr?.country,
    // });
  });
};
