
    module.exports = function (app) {
        const modelName = "product_weights";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            estateName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate Name, p, false, true, true, true, true, true, true, , , , ," },
productType: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Product Type, p, false, true, true, true, true, true, true, , , , ," },
productName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Product Name, p, false, true, true, true, true, true, true, , , , ," },
productDescription: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Product Description, p, false, true, true, true, true, true, true, , , , ," },
block: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Block, p, false, true, true, true, true, true, true, , , , ," },
division: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Division, p, false, true, true, true, true, true, true, , , , ," },
yop: { type: Number, max: 10000000, comment: "YOP, p_number, false, true, true, true, true, true, true, , , , ," },
weight: { type: Number, max: 10000000, comment: "Weight, p_number, false, true, true, true, true, true, true, , , , ," },

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