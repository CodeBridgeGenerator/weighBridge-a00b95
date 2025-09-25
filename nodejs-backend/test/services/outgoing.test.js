const assert = require("assert");
const app = require("../../src/app");

describe("outgoing service", () => {
  let thisService;
  let outgoingCreated;

  beforeEach(async () => {
    thisService = await app.service("outgoing");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (outgoing)");
  });

  describe("#create", () => {
    const options = {"product":"new value","estate":"new value","doNumber":"new value","trailorNumber":"new value","remark":"new value","seal":"new value","contract":"new value","vehicleNumber":"new value","supplier":"new value","driver":"new value","transporter":"new value","firstWeight":23,"secondWeight":23,"adjustment":"new value","adjustedWeight":"new value","netWeight":23};

    beforeEach(async () => {
      outgoingCreated = await thisService.create(options);
    });

    it("should create a new outgoing", () => {
      assert.strictEqual(outgoingCreated.product, options.product);
assert.strictEqual(outgoingCreated.estate, options.estate);
assert.strictEqual(outgoingCreated.doNumber, options.doNumber);
assert.strictEqual(outgoingCreated.trailorNumber, options.trailorNumber);
assert.strictEqual(outgoingCreated.remark, options.remark);
assert.strictEqual(outgoingCreated.seal, options.seal);
assert.strictEqual(outgoingCreated.contract, options.contract);
assert.strictEqual(outgoingCreated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(outgoingCreated.supplier, options.supplier);
assert.strictEqual(outgoingCreated.driver, options.driver);
assert.strictEqual(outgoingCreated.transporter, options.transporter);
assert.strictEqual(outgoingCreated.firstWeight, options.firstWeight);
assert.strictEqual(outgoingCreated.secondWeight, options.secondWeight);
assert.strictEqual(outgoingCreated.adjustment, options.adjustment);
assert.strictEqual(outgoingCreated.adjustedWeight, options.adjustedWeight);
assert.strictEqual(outgoingCreated.netWeight, options.netWeight);
    });
  });

  describe("#get", () => {
    it("should retrieve a outgoing by ID", async () => {
      const retrieved = await thisService.get(outgoingCreated._id);
      assert.strictEqual(retrieved._id, outgoingCreated._id);
    });
  });

  describe("#update", () => {
    let outgoingUpdated;
    const options = {"product":"updated value","estate":"updated value","doNumber":"updated value","trailorNumber":"updated value","remark":"updated value","seal":"updated value","contract":"updated value","vehicleNumber":"updated value","supplier":"updated value","driver":"updated value","transporter":"updated value","firstWeight":100,"secondWeight":100,"adjustment":"updated value","adjustedWeight":"updated value","netWeight":100};

    beforeEach(async () => {
      outgoingUpdated = await thisService.update(outgoingCreated._id, options);
    });

    it("should update an existing outgoing ", async () => {
      assert.strictEqual(outgoingUpdated.product, options.product);
assert.strictEqual(outgoingUpdated.estate, options.estate);
assert.strictEqual(outgoingUpdated.doNumber, options.doNumber);
assert.strictEqual(outgoingUpdated.trailorNumber, options.trailorNumber);
assert.strictEqual(outgoingUpdated.remark, options.remark);
assert.strictEqual(outgoingUpdated.seal, options.seal);
assert.strictEqual(outgoingUpdated.contract, options.contract);
assert.strictEqual(outgoingUpdated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(outgoingUpdated.supplier, options.supplier);
assert.strictEqual(outgoingUpdated.driver, options.driver);
assert.strictEqual(outgoingUpdated.transporter, options.transporter);
assert.strictEqual(outgoingUpdated.firstWeight, options.firstWeight);
assert.strictEqual(outgoingUpdated.secondWeight, options.secondWeight);
assert.strictEqual(outgoingUpdated.adjustment, options.adjustment);
assert.strictEqual(outgoingUpdated.adjustedWeight, options.adjustedWeight);
assert.strictEqual(outgoingUpdated.netWeight, options.netWeight);
    });
  });

  describe("#delete", () => {
  let outgoingDeleted;
    beforeEach(async () => {
      outgoingDeleted = await thisService.remove(outgoingCreated._id);
    });

    it("should delete a outgoing", async () => {
      assert.strictEqual(outgoingDeleted._id, outgoingCreated._id);
    });
  });
});