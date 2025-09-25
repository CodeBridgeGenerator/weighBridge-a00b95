
const incoming = require("./incoming/incoming.service.js");
const outgoing = require("./outgoing/outgoing.service.js");
const products = require("./products/products.service.js");
const tickets = require("./tickets/tickets.service.js");
const gradings = require("./gradings/gradings.service.js");
const millTickets = require("./millTickets/millTickets.service.js");
const estates = require("./estates/estates.service.js");
const productWeights = require("./productWeights/productWeights.service.js");
const suppliers = require("./suppliers/suppliers.service.js");
const vehicles = require("./vehicles/vehicles.service.js");
const customers = require("./customers/customers.service.js");
const transporters = require("./transporters/transporters.service.js");
const cropDeductions = require("./cropDeductions/cropDeductions.service.js");
const drivers = require("./drivers/drivers.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(incoming);
  app.configure(outgoing);
  app.configure(products);
  app.configure(tickets);
  app.configure(gradings);
  app.configure(millTickets);
  app.configure(estates);
  app.configure(productWeights);
  app.configure(suppliers);
  app.configure(vehicles);
  app.configure(customers);
  app.configure(transporters);
  app.configure(cropDeductions);
  app.configure(drivers);
    // ~cb-add-configure-service-name~
};
