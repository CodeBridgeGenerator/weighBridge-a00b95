const assert = require("assert");
const app = require("../../src/app");

describe("tickets service", () => {
  let thisService;
  let ticketCreated;

  beforeEach(async () => {
    thisService = await app.service("tickets");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (tickets)");
  });

  describe("#create", () => {
    const options = {"ticketNumber":"new value","block":"new value","division":"new value","yop":23,"loader":"new value","bunch":23,"netWeight":"new value"};

    beforeEach(async () => {
      ticketCreated = await thisService.create(options);
    });

    it("should create a new ticket", () => {
      assert.strictEqual(ticketCreated.ticketNumber, options.ticketNumber);
assert.strictEqual(ticketCreated.block, options.block);
assert.strictEqual(ticketCreated.division, options.division);
assert.strictEqual(ticketCreated.yop, options.yop);
assert.strictEqual(ticketCreated.loader, options.loader);
assert.strictEqual(ticketCreated.bunch, options.bunch);
assert.strictEqual(ticketCreated.netWeight, options.netWeight);
    });
  });

  describe("#get", () => {
    it("should retrieve a ticket by ID", async () => {
      const retrieved = await thisService.get(ticketCreated._id);
      assert.strictEqual(retrieved._id, ticketCreated._id);
    });
  });

  describe("#update", () => {
    let ticketUpdated;
    const options = {"ticketNumber":"updated value","block":"updated value","division":"updated value","yop":100,"loader":"updated value","bunch":100,"netWeight":"updated value"};

    beforeEach(async () => {
      ticketUpdated = await thisService.update(ticketCreated._id, options);
    });

    it("should update an existing ticket ", async () => {
      assert.strictEqual(ticketUpdated.ticketNumber, options.ticketNumber);
assert.strictEqual(ticketUpdated.block, options.block);
assert.strictEqual(ticketUpdated.division, options.division);
assert.strictEqual(ticketUpdated.yop, options.yop);
assert.strictEqual(ticketUpdated.loader, options.loader);
assert.strictEqual(ticketUpdated.bunch, options.bunch);
assert.strictEqual(ticketUpdated.netWeight, options.netWeight);
    });
  });

  describe("#delete", () => {
  let ticketDeleted;
    beforeEach(async () => {
      ticketDeleted = await thisService.remove(ticketCreated._id);
    });

    it("should delete a ticket", async () => {
      assert.strictEqual(ticketDeleted._id, ticketCreated._id);
    });
  });
});