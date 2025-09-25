
    module.exports = function (app) {
        const modelName = "drivers";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            driverId: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Driver ID, p, false, true, true, true, true, true, true, , , , ," },
driverName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Driver Name, p, false, true, true, true, true, true, true, , , , ," },
icNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "IC Number, p, false, true, true, true, true, true, true, , , , ," },
licenseNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "License Number, p, false, true, true, true, true, true, true, , , , ," },

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