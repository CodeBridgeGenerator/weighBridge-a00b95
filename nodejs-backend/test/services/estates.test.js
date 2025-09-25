const assert = require("assert");
const app = require("../../src/app");

describe("estates service", () => {
  let thisService;
  let estateCreated;

  beforeEach(async () => {
    thisService = await app.service("estates");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (estates)");
  });

  describe("#create", () => {
    const options = {"estateCode":"new value","estateName":"new value","companyName":"new value","addressOne":"new value","addressTwo":"new value","addressThree":"new value","telephone":"new value","fax":"new value","remark":"new value"};

    beforeEach(async () => {
      estateCreated = await thisService.create(options);
    });

    it("should create a new estate", () => {
      assert.strictEqual(estateCreated.estateCode, options.estateCode);
assert.strictEqual(estateCreated.estateName, options.estateName);
assert.strictEqual(estateCreated.companyName, options.companyName);
assert.strictEqual(estateCreated.addressOne, options.addressOne);
assert.strictEqual(estateCreated.addressTwo, options.addressTwo);
assert.strictEqual(estateCreated.addressThree, options.addressThree);
assert.strictEqual(estateCreated.telephone, options.telephone);
assert.strictEqual(estateCreated.fax, options.fax);
assert.strictEqual(estateCreated.remark, options.remark);
    });
  });

  describe("#get", () => {
    it("should retrieve a estate by ID", async () => {
      const retrieved = await thisService.get(estateCreated._id);
      assert.strictEqual(retrieved._id, estateCreated._id);
    });
  });

  describe("#update", () => {
    let estateUpdated;
    const options = {"estateCode":"updated value","estateName":"updated value","companyName":"updated value","addressOne":"updated value","addressTwo":"updated value","addressThree":"updated value","telephone":"updated value","fax":"updated value","remark":"updated value"};

    beforeEach(async () => {
      estateUpdated = await thisService.update(estateCreated._id, options);
    });

    it("should update an existing estate ", async () => {
      assert.strictEqual(estateUpdated.estateCode, options.estateCode);
assert.strictEqual(estateUpdated.estateName, options.estateName);
assert.strictEqual(estateUpdated.companyName, options.companyName);
assert.strictEqual(estateUpdated.addressOne, options.addressOne);
assert.strictEqual(estateUpdated.addressTwo, options.addressTwo);
assert.strictEqual(estateUpdated.addressThree, options.addressThree);
assert.strictEqual(estateUpdated.telephone, options.telephone);
assert.strictEqual(estateUpdated.fax, options.fax);
assert.strictEqual(estateUpdated.remark, options.remark);
    });
  });

  describe("#delete", () => {
  let estateDeleted;
    beforeEach(async () => {
      estateDeleted = await thisService.remove(estateCreated._id);
    });

    it("should delete a estate", async () => {
      assert.strictEqual(estateDeleted._id, estateCreated._id);
    });
  });
});