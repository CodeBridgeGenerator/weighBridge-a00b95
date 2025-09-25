const assert = require("assert");
const app = require("../../src/app");

describe("productWeights service", () => {
  let thisService;
  let productWeightCreated;

  beforeEach(async () => {
    thisService = await app.service("productWeights");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (productWeights)");
  });

  describe("#create", () => {
    const options = {"estateName":"new value","productType":"new value","productName":"new value","productDescription":"new value","block":"new value","division":"new value","yop":23,"weight":23};

    beforeEach(async () => {
      productWeightCreated = await thisService.create(options);
    });

    it("should create a new productWeight", () => {
      assert.strictEqual(productWeightCreated.estateName, options.estateName);
assert.strictEqual(productWeightCreated.productType, options.productType);
assert.strictEqual(productWeightCreated.productName, options.productName);
assert.strictEqual(productWeightCreated.productDescription, options.productDescription);
assert.strictEqual(productWeightCreated.block, options.block);
assert.strictEqual(productWeightCreated.division, options.division);
assert.strictEqual(productWeightCreated.yop, options.yop);
assert.strictEqual(productWeightCreated.weight, options.weight);
    });
  });

  describe("#get", () => {
    it("should retrieve a productWeight by ID", async () => {
      const retrieved = await thisService.get(productWeightCreated._id);
      assert.strictEqual(retrieved._id, productWeightCreated._id);
    });
  });

  describe("#update", () => {
    let productWeightUpdated;
    const options = {"estateName":"updated value","productType":"updated value","productName":"updated value","productDescription":"updated value","block":"updated value","division":"updated value","yop":100,"weight":100};

    beforeEach(async () => {
      productWeightUpdated = await thisService.update(productWeightCreated._id, options);
    });

    it("should update an existing productWeight ", async () => {
      assert.strictEqual(productWeightUpdated.estateName, options.estateName);
assert.strictEqual(productWeightUpdated.productType, options.productType);
assert.strictEqual(productWeightUpdated.productName, options.productName);
assert.strictEqual(productWeightUpdated.productDescription, options.productDescription);
assert.strictEqual(productWeightUpdated.block, options.block);
assert.strictEqual(productWeightUpdated.division, options.division);
assert.strictEqual(productWeightUpdated.yop, options.yop);
assert.strictEqual(productWeightUpdated.weight, options.weight);
    });
  });

  describe("#delete", () => {
  let productWeightDeleted;
    beforeEach(async () => {
      productWeightDeleted = await thisService.remove(productWeightCreated._id);
    });

    it("should delete a productWeight", async () => {
      assert.strictEqual(productWeightDeleted._id, productWeightCreated._id);
    });
  });
});