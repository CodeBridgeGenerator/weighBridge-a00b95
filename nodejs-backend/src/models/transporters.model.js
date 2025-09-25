
    module.exports = function (app) {
        const modelName = "transporters";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            transporterId: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Transporter ID, p, false, true, true, true, true, true, true, , , , ," },
transporter: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Transporter, p, false, true, true, true, true, true, true, , , , ," },
registrationNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Registration Number, p, false, true, true, true, true, true, true, , , , ," },

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