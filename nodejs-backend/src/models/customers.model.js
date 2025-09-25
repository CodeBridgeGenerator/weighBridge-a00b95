
    module.exports = function (app) {
        const modelName = "customers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            customerCode: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Customer Code, p, false, true, true, true, true, true, true, , , , ," },
customerName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Customer Name, p, false, true, true, true, true, true, true, , , , ," },
address1: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address 1, p, false, true, true, true, true, true, true, , , , ," },
address2: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address 2, p, false, true, true, true, true, true, true, , , , ," },
address3: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address 3, p, false, true, true, true, true, true, true, , , , ," },
npwpNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "NPWP Number, p, false, true, true, true, true, true, true, , , , ," },
telephone: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Telephone, p, false, true, true, true, true, true, true, , , , ," },
fax: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Fax, p, false, true, true, true, true, true, true, , , , ," },
estate: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate, p, false, true, true, true, true, true, true, , , , ," },

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