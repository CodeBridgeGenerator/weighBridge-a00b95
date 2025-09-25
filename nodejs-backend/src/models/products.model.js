
    module.exports = function (app) {
        const modelName = "products";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            productCode: { type: Number, max: 10000000, comment: "Product Code, p_number, false, true, true, true, true, true, true, , , , ," },
description: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Description, p, false, true, true, true, true, true, true, , , , ," },
estate: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate, p, false, true, true, true, true, true, true, , , , ," },
unit: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Unit, p, false, true, true, true, true, true, true, , , , ," },
vat: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "VAT, p, false, true, true, true, true, true, true, , , , ," },
type: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Type, p, false, true, true, true, true, true, true, , , , ," },
weight: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Weight, p, false, true, true, true, true, true, true, , , , ," },

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