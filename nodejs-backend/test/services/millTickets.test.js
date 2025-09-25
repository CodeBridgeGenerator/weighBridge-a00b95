const assert = require("assert");
const app = require("../../src/app");

describe("millTickets service", () => {
  let thisService;
  let millTicketCreated;

  beforeEach(async () => {
    thisService = await app.service("millTickets");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (millTickets)");
  });

  describe("#create", () => {
    const options = {"estateWbTicketNumber":"new value","estateName":"new value","estateDoNumber":"new value","millTicketNumber":23,"millReceivedTime":23,"millDespatchTime":23,"estateWeight":23,"millWeight":23,"millRejectedWeight":23,"penalty":"new value","oer":23,"cropHarvestedBy":"new value"};

    beforeEach(async () => {
      millTicketCreated = await thisService.create(options);
    });

    it("should create a new millTicket", () => {
      assert.strictEqual(millTicketCreated.estateWbTicketNumber, options.estateWbTicketNumber);
assert.strictEqual(millTicketCreated.estateName, options.estateName);
assert.strictEqual(millTicketCreated.estateDoNumber, options.estateDoNumber);
assert.strictEqual(millTicketCreated.millTicketNumber, options.millTicketNumber);
assert.strictEqual(millTicketCreated.millReceivedTime, options.millReceivedTime);
assert.strictEqual(millTicketCreated.millDespatchTime, options.millDespatchTime);
assert.strictEqual(millTicketCreated.estateWeight, options.estateWeight);
assert.strictEqual(millTicketCreated.millWeight, options.millWeight);
assert.strictEqual(millTicketCreated.millRejectedWeight, options.millRejectedWeight);
assert.strictEqual(millTicketCreated.penalty, options.penalty);
assert.strictEqual(millTicketCreated.oer, options.oer);
assert.strictEqual(millTicketCreated.cropHarvestedBy, options.cropHarvestedBy);
    });
  });

  describe("#get", () => {
    it("should retrieve a millTicket by ID", async () => {
      const retrieved = await thisService.get(millTicketCreated._id);
      assert.strictEqual(retrieved._id, millTicketCreated._id);
    });
  });

  describe("#update", () => {
    let millTicketUpdated;
    const options = {"estateWbTicketNumber":"updated value","estateName":"updated value","estateDoNumber":"updated value","millTicketNumber":100,"millReceivedTime":100,"millDespatchTime":100,"estateWeight":100,"millWeight":100,"millRejectedWeight":100,"penalty":"updated value","oer":100,"cropHarvestedBy":"updated value"};

    beforeEach(async () => {
      millTicketUpdated = await thisService.update(millTicketCreated._id, options);
    });

    it("should update an existing millTicket ", async () => {
      assert.strictEqual(millTicketUpdated.estateWbTicketNumber, options.estateWbTicketNumber);
assert.strictEqual(millTicketUpdated.estateName, options.estateName);
assert.strictEqual(millTicketUpdated.estateDoNumber, options.estateDoNumber);
assert.strictEqual(millTicketUpdated.millTicketNumber, options.millTicketNumber);
assert.strictEqual(millTicketUpdated.millReceivedTime, options.millReceivedTime);
assert.strictEqual(millTicketUpdated.millDespatchTime, options.millDespatchTime);
assert.strictEqual(millTicketUpdated.estateWeight, options.estateWeight);
assert.strictEqual(millTicketUpdated.millWeight, options.millWeight);
assert.strictEqual(millTicketUpdated.millRejectedWeight, options.millRejectedWeight);
assert.strictEqual(millTicketUpdated.penalty, options.penalty);
assert.strictEqual(millTicketUpdated.oer, options.oer);
assert.strictEqual(millTicketUpdated.cropHarvestedBy, options.cropHarvestedBy);
    });
  });

  describe("#delete", () => {
  let millTicketDeleted;
    beforeEach(async () => {
      millTicketDeleted = await thisService.remove(millTicketCreated._id);
    });

    it("should delete a millTicket", async () => {
      assert.strictEqual(millTicketDeleted._id, millTicketCreated._id);
    });
  });
});