const assert = require("assert");
const app = require("../../src/app");

describe("transporters service", () => {
  let thisService;
  let transporterCreated;

  beforeEach(async () => {
    thisService = await app.service("transporters");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (transporters)");
  });

  describe("#create", () => {
    const options = {"transporterId":"new value","transporter":"new value","registrationNumber":"new value"};

    beforeEach(async () => {
      transporterCreated = await thisService.create(options);
    });

    it("should create a new transporter", () => {
      assert.strictEqual(transporterCreated.transporterId, options.transporterId);
assert.strictEqual(transporterCreated.transporter, options.transporter);
assert.strictEqual(transporterCreated.registrationNumber, options.registrationNumber);
    });
  });

  describe("#get", () => {
    it("should retrieve a transporter by ID", async () => {
      const retrieved = await thisService.get(transporterCreated._id);
      assert.strictEqual(retrieved._id, transporterCreated._id);
    });
  });

  describe("#update", () => {
    let transporterUpdated;
    const options = {"transporterId":"updated value","transporter":"updated value","registrationNumber":"updated value"};

    beforeEach(async () => {
      transporterUpdated = await thisService.update(transporterCreated._id, options);
    });

    it("should update an existing transporter ", async () => {
      assert.strictEqual(transporterUpdated.transporterId, options.transporterId);
assert.strictEqual(transporterUpdated.transporter, options.transporter);
assert.strictEqual(transporterUpdated.registrationNumber, options.registrationNumber);
    });
  });

  describe("#delete", () => {
  let transporterDeleted;
    beforeEach(async () => {
      transporterDeleted = await thisService.remove(transporterCreated._id);
    });

    it("should delete a transporter", async () => {
      assert.strictEqual(transporterDeleted._id, transporterCreated._id);
    });
  });
});