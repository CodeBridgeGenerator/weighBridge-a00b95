
    module.exports = function (app) {
        const modelName = "tickets";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ticketNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Ticket Number, p, false, true, true, true, true, true, true, , , , ," },
block: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Block, p, false, true, true, true, true, true, true, , , , ," },
division: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Division, p, false, true, true, true, true, true, true, , , , ," },
yop: { type: Number, max: 10000000, comment: "YOP, p_number, false, true, true, true, true, true, true, , , , ," },
loader: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Loader, p, false, true, true, true, true, true, true, , , , ," },
bunch: { type: Number, max: 10000000, comment: "Bunch, p_number, false, true, true, true, true, true, true, , , , ," },
netWeight: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Net Weight, p, false, true, true, true, true, true, true, , , , ," },

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