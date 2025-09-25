const assert = require("assert");
const app = require("../../src/app");

describe("suppliers service", () => {
  let thisService;
  let supplierCreated;

  beforeEach(async () => {
    thisService = await app.service("suppliers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (suppliers)");
  });

  describe("#create", () => {
    const options = {"supplierCode":23,"supplierName":"new value","company":"new value","addressOne":"new value","addressTwo":"new value","addressThree":"new value","postcode":23,"telephone":"new value","fax":"new value","mpobCertificateNumber":23,"certificateName":"new value","expiryDate":23,"plantedHa":23,"yop":23,"uploadCertificate":"new value"};

    beforeEach(async () => {
      supplierCreated = await thisService.create(options);
    });

    it("should create a new supplier", () => {
      assert.strictEqual(supplierCreated.supplierCode, options.supplierCode);
assert.strictEqual(supplierCreated.supplierName, options.supplierName);
assert.strictEqual(supplierCreated.company, options.company);
assert.strictEqual(supplierCreated.addressOne, options.addressOne);
assert.strictEqual(supplierCreated.addressTwo, options.addressTwo);
assert.strictEqual(supplierCreated.addressThree, options.addressThree);
assert.strictEqual(supplierCreated.postcode, options.postcode);
assert.strictEqual(supplierCreated.telephone, options.telephone);
assert.strictEqual(supplierCreated.fax, options.fax);
assert.strictEqual(supplierCreated.mpobCertificateNumber, options.mpobCertificateNumber);
assert.strictEqual(supplierCreated.certificateName, options.certificateName);
assert.strictEqual(supplierCreated.expiryDate, options.expiryDate);
assert.strictEqual(supplierCreated.plantedHa, options.plantedHa);
assert.strictEqual(supplierCreated.yop, options.yop);
assert.strictEqual(supplierCreated.uploadCertificate, options.uploadCertificate);
    });
  });

  describe("#get", () => {
    it("should retrieve a supplier by ID", async () => {
      const retrieved = await thisService.get(supplierCreated._id);
      assert.strictEqual(retrieved._id, supplierCreated._id);
    });
  });

  describe("#update", () => {
    let supplierUpdated;
    const options = {"supplierCode":100,"supplierName":"updated value","company":"updated value","addressOne":"updated value","addressTwo":"updated value","addressThree":"updated value","postcode":100,"telephone":"updated value","fax":"updated value","mpobCertificateNumber":100,"certificateName":"updated value","expiryDate":100,"plantedHa":100,"yop":100,"uploadCertificate":"updated value"};

    beforeEach(async () => {
      supplierUpdated = await thisService.update(supplierCreated._id, options);
    });

    it("should update an existing supplier ", async () => {
      assert.strictEqual(supplierUpdated.supplierCode, options.supplierCode);
assert.strictEqual(supplierUpdated.supplierName, options.supplierName);
assert.strictEqual(supplierUpdated.company, options.company);
assert.strictEqual(supplierUpdated.addressOne, options.addressOne);
assert.strictEqual(supplierUpdated.addressTwo, options.addressTwo);
assert.strictEqual(supplierUpdated.addressThree, options.addressThree);
assert.strictEqual(supplierUpdated.postcode, options.postcode);
assert.strictEqual(supplierUpdated.telephone, options.telephone);
assert.strictEqual(supplierUpdated.fax, options.fax);
assert.strictEqual(supplierUpdated.mpobCertificateNumber, options.mpobCertificateNumber);
assert.strictEqual(supplierUpdated.certificateName, options.certificateName);
assert.strictEqual(supplierUpdated.expiryDate, options.expiryDate);
assert.strictEqual(supplierUpdated.plantedHa, options.plantedHa);
assert.strictEqual(supplierUpdated.yop, options.yop);
assert.strictEqual(supplierUpdated.uploadCertificate, options.uploadCertificate);
    });
  });

  describe("#delete", () => {
  let supplierDeleted;
    beforeEach(async () => {
      supplierDeleted = await thisService.remove(supplierCreated._id);
    });

    it("should delete a supplier", async () => {
      assert.strictEqual(supplierDeleted._id, supplierCreated._id);
    });
  });
});