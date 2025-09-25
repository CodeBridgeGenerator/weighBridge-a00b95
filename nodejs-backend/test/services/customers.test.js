const assert = require("assert");
const app = require("../../src/app");

describe("customers service", () => {
  let thisService;
  let customerCreated;

  beforeEach(async () => {
    thisService = await app.service("customers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (customers)");
  });

  describe("#create", () => {
    const options = {"customerCode":"new value","customerName":"new value","address1":"new value","address2":"new value","address3":"new value","npwpNumber":"new value","telephone":"new value","fax":"new value","estate":"new value"};

    beforeEach(async () => {
      customerCreated = await thisService.create(options);
    });

    it("should create a new customer", () => {
      assert.strictEqual(customerCreated.customerCode, options.customerCode);
assert.strictEqual(customerCreated.customerName, options.customerName);
assert.strictEqual(customerCreated.address1, options.address1);
assert.strictEqual(customerCreated.address2, options.address2);
assert.strictEqual(customerCreated.address3, options.address3);
assert.strictEqual(customerCreated.npwpNumber, options.npwpNumber);
assert.strictEqual(customerCreated.telephone, options.telephone);
assert.strictEqual(customerCreated.fax, options.fax);
assert.strictEqual(customerCreated.estate, options.estate);
    });
  });

  describe("#get", () => {
    it("should retrieve a customer by ID", async () => {
      const retrieved = await thisService.get(customerCreated._id);
      assert.strictEqual(retrieved._id, customerCreated._id);
    });
  });

  describe("#update", () => {
    let customerUpdated;
    const options = {"customerCode":"updated value","customerName":"updated value","address1":"updated value","address2":"updated value","address3":"updated value","npwpNumber":"updated value","telephone":"updated value","fax":"updated value","estate":"updated value"};

    beforeEach(async () => {
      customerUpdated = await thisService.update(customerCreated._id, options);
    });

    it("should update an existing customer ", async () => {
      assert.strictEqual(customerUpdated.customerCode, options.customerCode);
assert.strictEqual(customerUpdated.customerName, options.customerName);
assert.strictEqual(customerUpdated.address1, options.address1);
assert.strictEqual(customerUpdated.address2, options.address2);
assert.strictEqual(customerUpdated.address3, options.address3);
assert.strictEqual(customerUpdated.npwpNumber, options.npwpNumber);
assert.strictEqual(customerUpdated.telephone, options.telephone);
assert.strictEqual(customerUpdated.fax, options.fax);
assert.strictEqual(customerUpdated.estate, options.estate);
    });
  });

  describe("#delete", () => {
  let customerDeleted;
    beforeEach(async () => {
      customerDeleted = await thisService.remove(customerCreated._id);
    });

    it("should delete a customer", async () => {
      assert.strictEqual(customerDeleted._id, customerCreated._id);
    });
  });
});