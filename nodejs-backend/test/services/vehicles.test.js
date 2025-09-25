const assert = require("assert");
const app = require("../../src/app");

describe("vehicles service", () => {
  let thisService;
  let vehicleCreated;

  beforeEach(async () => {
    thisService = await app.service("vehicles");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (vehicles)");
  });

  describe("#create", () => {
    const options = {"vehicleNumber":"new value","vehicleDescription":"new value","vehicleRegistrationNumber":"new value","transporter":"new value"};

    beforeEach(async () => {
      vehicleCreated = await thisService.create(options);
    });

    it("should create a new vehicle", () => {
      assert.strictEqual(vehicleCreated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(vehicleCreated.vehicleDescription, options.vehicleDescription);
assert.strictEqual(vehicleCreated.vehicleRegistrationNumber, options.vehicleRegistrationNumber);
assert.strictEqual(vehicleCreated.transporter, options.transporter);
    });
  });

  describe("#get", () => {
    it("should retrieve a vehicle by ID", async () => {
      const retrieved = await thisService.get(vehicleCreated._id);
      assert.strictEqual(retrieved._id, vehicleCreated._id);
    });
  });

  describe("#update", () => {
    let vehicleUpdated;
    const options = {"vehicleNumber":"updated value","vehicleDescription":"updated value","vehicleRegistrationNumber":"updated value","transporter":"updated value"};

    beforeEach(async () => {
      vehicleUpdated = await thisService.update(vehicleCreated._id, options);
    });

    it("should update an existing vehicle ", async () => {
      assert.strictEqual(vehicleUpdated.vehicleNumber, options.vehicleNumber);
assert.strictEqual(vehicleUpdated.vehicleDescription, options.vehicleDescription);
assert.strictEqual(vehicleUpdated.vehicleRegistrationNumber, options.vehicleRegistrationNumber);
assert.strictEqual(vehicleUpdated.transporter, options.transporter);
    });
  });

  describe("#delete", () => {
  let vehicleDeleted;
    beforeEach(async () => {
      vehicleDeleted = await thisService.remove(vehicleCreated._id);
    });

    it("should delete a vehicle", async () => {
      assert.strictEqual(vehicleDeleted._id, vehicleCreated._id);
    });
  });
});