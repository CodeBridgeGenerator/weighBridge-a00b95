
    module.exports = function (app) {
        const modelName = "vehicles";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            vehicleNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Vehicle Number, p, false, true, true, true, true, true, true, , , , ," },
vehicleDescription: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Vehicle Description, p, false, true, true, true, true, true, true, , , , ," },
vehicleRegistrationNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Vehicle Registration Number, p, false, true, true, true, true, true, true, , , , ," },
transporter: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Transporter, p, false, true, true, true, true, true, true, , , , ," },

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