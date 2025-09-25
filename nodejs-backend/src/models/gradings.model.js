
    module.exports = function (app) {
        const modelName = "gradings";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ticketNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Ticket Number, p, false, true, true, true, true, true, true, , , , ," },
unripeBunch: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Unripe Bunch, p, false, true, true, true, true, true, true, , , , ," },
longStalk: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Long Stalk, p, false, true, true, true, true, true, true, , , , ," },
rottenBunch: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Rotten Bunch, p, false, true, true, true, true, true, true, , , , ," },

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