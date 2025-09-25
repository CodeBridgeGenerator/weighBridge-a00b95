const assert = require("assert");
const app = require("../../src/app");

describe("gradings service", () => {
  let thisService;
  let gradingCreated;

  beforeEach(async () => {
    thisService = await app.service("gradings");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (gradings)");
  });

  describe("#create", () => {
    const options = {"ticketNumber":"new value","unripeBunch":"new value","longStalk":"new value","rottenBunch":"new value"};

    beforeEach(async () => {
      gradingCreated = await thisService.create(options);
    });

    it("should create a new grading", () => {
      assert.strictEqual(gradingCreated.ticketNumber, options.ticketNumber);
assert.strictEqual(gradingCreated.unripeBunch, options.unripeBunch);
assert.strictEqual(gradingCreated.longStalk, options.longStalk);
assert.strictEqual(gradingCreated.rottenBunch, options.rottenBunch);
    });
  });

  describe("#get", () => {
    it("should retrieve a grading by ID", async () => {
      const retrieved = await thisService.get(gradingCreated._id);
      assert.strictEqual(retrieved._id, gradingCreated._id);
    });
  });

  describe("#update", () => {
    let gradingUpdated;
    const options = {"ticketNumber":"updated value","unripeBunch":"updated value","longStalk":"updated value","rottenBunch":"updated value"};

    beforeEach(async () => {
      gradingUpdated = await thisService.update(gradingCreated._id, options);
    });

    it("should update an existing grading ", async () => {
      assert.strictEqual(gradingUpdated.ticketNumber, options.ticketNumber);
assert.strictEqual(gradingUpdated.unripeBunch, options.unripeBunch);
assert.strictEqual(gradingUpdated.longStalk, options.longStalk);
assert.strictEqual(gradingUpdated.rottenBunch, options.rottenBunch);
    });
  });

  describe("#delete", () => {
  let gradingDeleted;
    beforeEach(async () => {
      gradingDeleted = await thisService.remove(gradingCreated._id);
    });

    it("should delete a grading", async () => {
      assert.strictEqual(gradingDeleted._id, gradingCreated._id);
    });
  });
});