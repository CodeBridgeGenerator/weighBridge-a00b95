const assert = require("assert");
const app = require("../../src/app");

describe("drivers service", () => {
  let thisService;
  let driverCreated;

  beforeEach(async () => {
    thisService = await app.service("drivers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (drivers)");
  });

  describe("#create", () => {
    const options = {"driverId":"new value","driverName":"new value","icNumber":"new value","licenseNumber":"new value"};

    beforeEach(async () => {
      driverCreated = await thisService.create(options);
    });

    it("should create a new driver", () => {
      assert.strictEqual(driverCreated.driverId, options.driverId);
assert.strictEqual(driverCreated.driverName, options.driverName);
assert.strictEqual(driverCreated.icNumber, options.icNumber);
assert.strictEqual(driverCreated.licenseNumber, options.licenseNumber);
    });
  });

  describe("#get", () => {
    it("should retrieve a driver by ID", async () => {
      const retrieved = await thisService.get(driverCreated._id);
      assert.strictEqual(retrieved._id, driverCreated._id);
    });
  });

  describe("#update", () => {
    let driverUpdated;
    const options = {"driverId":"updated value","driverName":"updated value","icNumber":"updated value","licenseNumber":"updated value"};

    beforeEach(async () => {
      driverUpdated = await thisService.update(driverCreated._id, options);
    });

    it("should update an existing driver ", async () => {
      assert.strictEqual(driverUpdated.driverId, options.driverId);
assert.strictEqual(driverUpdated.driverName, options.driverName);
assert.strictEqual(driverUpdated.icNumber, options.icNumber);
assert.strictEqual(driverUpdated.licenseNumber, options.licenseNumber);
    });
  });

  describe("#delete", () => {
  let driverDeleted;
    beforeEach(async () => {
      driverDeleted = await thisService.remove(driverCreated._id);
    });

    it("should delete a driver", async () => {
      assert.strictEqual(driverDeleted._id, driverCreated._id);
    });
  });
});