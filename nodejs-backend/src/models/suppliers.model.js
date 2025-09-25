
    module.exports = function (app) {
        const modelName = "suppliers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            supplierCode: { type: Number, max: 10000000, comment: "Supplier Code, p_number, false, true, true, true, true, true, true, , , , ," },
supplierName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier Name, p, false, true, true, true, true, true, true, , , , ," },
company: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Company, p, false, true, true, true, true, true, true, , , , ," },
addressOne: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address One, p, false, true, true, true, true, true, true, , , , ," },
addressTwo: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address Two, p, false, true, true, true, true, true, true, , , , ," },
addressThree: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address Three, p, false, true, true, true, true, true, true, , , , ," },
postcode: { type: Number, max: 10000000, comment: "Postcode, p_number, false, true, true, true, true, true, true, , , , ," },
telephone: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Telephone, p, false, true, true, true, true, true, true, , , , ," },
fax: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Fax, p, false, true, true, true, true, true, true, , , , ," },
mpobCertificateNumber: { type: Number, max: 500123456000, comment: "MPOB Certificate Number, p_number, false, true, true, true, true, true, true, , , , ," },
certificateName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Certificate Name, p, false, true, true, true, true, true, true, , , , ," },
expiryDate: { type: Number, max: 10000000, comment: "Expiry date, p_number, false, true, true, true, true, true, true, , , , ," },
plantedHa: { type: Number, max: 10000000, comment: "Planted HA, p_number, false, true, true, true, true, true, true, , , , ," },
yop: { type: Number, max: 10000000, comment: "YOP, p_number, false, true, true, true, true, true, true, , , , ," },
uploadCertificate: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Upload Certificate, p, false, true, true, true, true, true, true, , , , ," },

            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };