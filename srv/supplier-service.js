const cds = require("@sap/cds")

module.exports = cds.service.impl(async function () {
  const bupa = await cds.connect.to("API_BUSINESS_PARTNER");
  
  this.on('READ', 'Suppliers', async req => {
    return bupa.run(req.query)
  })
})