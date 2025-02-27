const cds = require("@sap/cds");
const jwtDecode = require("jwt-decode");

module.exports = async (srv) => {
  const { Suppliers } = srv.entities;
  srv.before("*", (req) => {
    console.log("JWT Token: ", req.headers.authorization);
  });

  srv.on("READ", Suppliers, async (req) => {
    console.log("Country: ", req.user?.attr?.country);
    let suppliers = await SELECT.from(Suppliers).where({
      country: req.user?.attr?.country,
    });
  });
};
