const assert = require("assert");
const app = require("../../src/app");

describe("products service", () => {
  let thisService;
  let productCreated;

  beforeEach(async () => {
    thisService = await app.service("products");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (products)");
  });

  describe("#create", () => {
    const options = {"productCode":23,"description":"new value","estate":"new value","unit":"new value","vat":"new value","type":"new value","weight":"new value"};

    beforeEach(async () => {
      productCreated = await thisService.create(options);
    });

    it("should create a new product", () => {
      assert.strictEqual(productCreated.productCode, options.productCode);
assert.strictEqual(productCreated.description, options.description);
assert.strictEqual(productCreated.estate, options.estate);
assert.strictEqual(productCreated.unit, options.unit);
assert.strictEqual(productCreated.vat, options.vat);
assert.strictEqual(productCreated.type, options.type);
assert.strictEqual(productCreated.weight, options.weight);
    });
  });

  describe("#get", () => {
    it("should retrieve a product by ID", async () => {
      const retrieved = await thisService.get(productCreated._id);
      assert.strictEqual(retrieved._id, productCreated._id);
    });
  });

  describe("#update", () => {
    let productUpdated;
    const options = {"productCode":100,"description":"updated value","estate":"updated value","unit":"updated value","vat":"updated value","type":"updated value","weight":"updated value"};

    beforeEach(async () => {
      productUpdated = await thisService.update(productCreated._id, options);
    });

    it("should update an existing product ", async () => {
      assert.strictEqual(productUpdated.productCode, options.productCode);
assert.strictEqual(productUpdated.description, options.description);
assert.strictEqual(productUpdated.estate, options.estate);
assert.strictEqual(productUpdated.unit, options.unit);
assert.strictEqual(productUpdated.vat, options.vat);
assert.strictEqual(productUpdated.type, options.type);
assert.strictEqual(productUpdated.weight, options.weight);
    });
  });

  describe("#delete", () => {
  let productDeleted;
    beforeEach(async () => {
      productDeleted = await thisService.remove(productCreated._id);
    });

    it("should delete a product", async () => {
      assert.strictEqual(productDeleted._id, productCreated._id);
    });
  });
});