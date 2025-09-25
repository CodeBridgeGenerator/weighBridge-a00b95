const assert = require("assert");
const app = require("../../src/app");

describe("cropDeductions service", () => {
  let thisService;
  let cropDeductionCreated;

  beforeEach(async () => {
    thisService = await app.service("cropDeductions");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (cropDeductions)");
  });

  describe("#create", () => {
    const options = {"january":23,"february":23,"march":23,"april":23,"may":23,"june":23,"july":23,"august":23,"september":"new value","october":"new value","november":"new value","december":"new value"};

    beforeEach(async () => {
      cropDeductionCreated = await thisService.create(options);
    });

    it("should create a new cropDeduction", () => {
      assert.strictEqual(cropDeductionCreated.january, options.january);
assert.strictEqual(cropDeductionCreated.february, options.february);
assert.strictEqual(cropDeductionCreated.march, options.march);
assert.strictEqual(cropDeductionCreated.april, options.april);
assert.strictEqual(cropDeductionCreated.may, options.may);
assert.strictEqual(cropDeductionCreated.june, options.june);
assert.strictEqual(cropDeductionCreated.july, options.july);
assert.strictEqual(cropDeductionCreated.august, options.august);
assert.strictEqual(cropDeductionCreated.september, options.september);
assert.strictEqual(cropDeductionCreated.october, options.october);
assert.strictEqual(cropDeductionCreated.november, options.november);
assert.strictEqual(cropDeductionCreated.december, options.december);
    });
  });

  describe("#get", () => {
    it("should retrieve a cropDeduction by ID", async () => {
      const retrieved = await thisService.get(cropDeductionCreated._id);
      assert.strictEqual(retrieved._id, cropDeductionCreated._id);
    });
  });

  describe("#update", () => {
    let cropDeductionUpdated;
    const options = {"january":100,"february":100,"march":100,"april":100,"may":100,"june":100,"july":100,"august":100,"september":"updated value","october":"updated value","november":"updated value","december":"updated value"};

    beforeEach(async () => {
      cropDeductionUpdated = await thisService.update(cropDeductionCreated._id, options);
    });

    it("should update an existing cropDeduction ", async () => {
      assert.strictEqual(cropDeductionUpdated.january, options.january);
assert.strictEqual(cropDeductionUpdated.february, options.february);
assert.strictEqual(cropDeductionUpdated.march, options.march);
assert.strictEqual(cropDeductionUpdated.april, options.april);
assert.strictEqual(cropDeductionUpdated.may, options.may);
assert.strictEqual(cropDeductionUpdated.june, options.june);
assert.strictEqual(cropDeductionUpdated.july, options.july);
assert.strictEqual(cropDeductionUpdated.august, options.august);
assert.strictEqual(cropDeductionUpdated.september, options.september);
assert.strictEqual(cropDeductionUpdated.october, options.october);
assert.strictEqual(cropDeductionUpdated.november, options.november);
assert.strictEqual(cropDeductionUpdated.december, options.december);
    });
  });

  describe("#delete", () => {
  let cropDeductionDeleted;
    beforeEach(async () => {
      cropDeductionDeleted = await thisService.remove(cropDeductionCreated._id);
    });

    it("should delete a cropDeduction", async () => {
      assert.strictEqual(cropDeductionDeleted._id, cropDeductionCreated._id);
    });
  });
});