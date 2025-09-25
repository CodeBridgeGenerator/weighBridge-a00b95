const assert = require("assert");
const app = require("../../src/app");

describe("incoming service", () => {
  let thisService;
  let incomingCreated;

  beforeEach(async () => {
    thisService = await app.service("incoming");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (incoming)");
  });

  describe("#create", () => {
    const options = {"product":"new value","estate":"new value","doNumber":"new value","trailorNumber":"new value","remark":"new value","seal":"new value","contract":"new value","vehicleNumber":"new value","supplier":"new value","driver":"new value","transporter":"new value","firstWeight":23,"secondWeight":"new value","adjustment":"new value","adjustedWeight":"new value","netWeight":"new value"};

    beforeEach(async () => {
      incomingCreated = await thisService.create(options);
    });

    it("should create a new incoming", () => {
      assert.strictEqual(incomingCreated.product, options.product);
assert.strictEqual(incomingCreated.estate, options.estate);
assert.strictEqual(incomingCreated.doNumber, options.doNumber);
assert.strictEqual(incomingCreated.trailorNumber, options.trailorNumber);
assert.strictEqual(incomingCreated.remark, options.remark);
assert.strictEqual(incomingCreated.seal, options.seal);
assert.strictEqual(incomingCreated.contract, options.contract);
assert.strictEqual(incomingCreated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(incomingCreated.supplier, options.supplier);
assert.strictEqual(incomingCreated.driver, options.driver);
assert.strictEqual(incomingCreated.transporter, options.transporter);
assert.strictEqual(incomingCreated.firstWeight, options.firstWeight);
assert.strictEqual(incomingCreated.secondWeight, options.secondWeight);
assert.strictEqual(incomingCreated.adjustment, options.adjustment);
assert.strictEqual(incomingCreated.adjustedWeight, options.adjustedWeight);
assert.strictEqual(incomingCreated.netWeight, options.netWeight);
    });
  });

  describe("#get", () => {
    it("should retrieve a incoming by ID", async () => {
      const retrieved = await thisService.get(incomingCreated._id);
      assert.strictEqual(retrieved._id, incomingCreated._id);
    });
  });

  describe("#update", () => {
    let incomingUpdated;
    const options = {"product":"updated value","estate":"updated value","doNumber":"updated value","trailorNumber":"updated value","remark":"updated value","seal":"updated value","contract":"updated value","vehicleNumber":"updated value","supplier":"updated value","driver":"updated value","transporter":"updated value","firstWeight":100,"secondWeight":"updated value","adjustment":"updated value","adjustedWeight":"updated value","netWeight":"updated value"};

    beforeEach(async () => {
      incomingUpdated = await thisService.update(incomingCreated._id, options);
    });

    it("should update an existing incoming ", async () => {
      assert.strictEqual(incomingUpdated.product, options.product);
assert.strictEqual(incomingUpdated.estate, options.estate);
assert.strictEqual(incomingUpdated.doNumber, options.doNumber);
assert.strictEqual(incomingUpdated.trailorNumber, options.trailorNumber);
assert.strictEqual(incomingUpdated.remark, options.remark);
assert.strictEqual(incomingUpdated.seal, options.seal);
assert.strictEqual(incomingUpdated.contract, options.contract);
assert.strictEqual(incomingUpdated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(incomingUpdated.supplier, options.supplier);
assert.strictEqual(incomingUpdated.driver, options.driver);
assert.strictEqual(incomingUpdated.transporter, options.transporter);
assert.strictEqual(incomingUpdated.firstWeight, options.firstWeight);
assert.strictEqual(incomingUpdated.secondWeight, options.secondWeight);
assert.strictEqual(incomingUpdated.adjustment, options.adjustment);
assert.strictEqual(incomingUpdated.adjustedWeight, options.adjustedWeight);
assert.strictEqual(incomingUpdated.netWeight, options.netWeight);
    });
  });

  describe("#delete", () => {
  let incomingDeleted;
    beforeEach(async () => {
      incomingDeleted = await thisService.remove(incomingCreated._id);
    });

    it("should delete a incoming", async () => {
      assert.strictEqual(incomingDeleted._id, incomingCreated._id);
    });
  });
});