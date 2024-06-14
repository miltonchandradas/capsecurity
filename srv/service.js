module.exports = async (srv) => {
  const { Suppliers } = srv.entities;
  srv.before("*", (req) => {
    console.log("JWT Token: ", req.headers.authorization);
  });

  srv.on("READ", Suppliers, async (req) => {
    console.log("Country: ", req.user?.attr?.country[0] ?? 'MX');
    let suppliers = await SELECT.from(Suppliers).where({
      country: req.user?.attr?.country[0] ?? 'MX'
    });

    suppliers.$count = suppliers?.length;
    return suppliers;
  });
};

