
    module.exports = function (app) {
        const modelName = "outgoing";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            product: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Product, p, false, true, true, true, true, true, true, , , , ," },
estate: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate, p, false, true, true, true, true, true, true, , , , ," },
doNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "DO Number, p, false, true, true, true, true, true, true, , , , ," },
trailorNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Trailor Number, p, false, true, true, true, true, true, true, , , , ," },
remark: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Remark, p, false, true, true, true, true, true, true, , , , ," },
seal: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Seal, p, false, true, true, true, true, true, true, , , , ," },
contract: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Contract, p, false, true, true, true, true, true, true, , , , ," },
vehicleNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Vehicle Number, p, false, true, true, true, true, true, true, , , , ," },
supplier: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Supplier, p, false, true, true, true, true, true, true, , , , ," },
driver: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Driver, p, false, true, true, true, true, true, true, , , , ," },
transporter: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Transporter, p, false, true, true, true, true, true, true, , , , ," },
firstWeight: { type: Number, max: 10000000, comment: "First Weight, p_number, false, true, true, true, true, true, true, , , , ," },
secondWeight: { type: Number, max: 10000000, comment: "Second Weight, p_number, false, true, true, true, true, true, true, , , , ," },
adjustment: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Adjustment, p, false, true, true, true, true, true, true, , , , ," },
adjustedWeight: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Adjusted Weight, p, false, true, true, true, true, true, true, , , , ," },
netWeight: { type: Number, max: 10000000, comment: "Net Weight, p_number, false, true, true, true, true, true, true, , , , ," },

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