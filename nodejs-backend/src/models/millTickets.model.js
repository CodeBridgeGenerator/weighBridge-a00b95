
    module.exports = function (app) {
        const modelName = "mill_tickets";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            estateWbTicketNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate WB Ticket Number, p, false, true, true, true, true, true, true, , , , ," },
estateName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate Name, p, false, true, true, true, true, true, true, , , , ," },
estateDoNumber: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate DO Number, p, false, true, true, true, true, true, true, , , , ," },
millTicketNumber: { type: Number, max: 202508000314, comment: "Mill Ticket Number, p_number, false, true, true, true, true, true, true, , , , ," },
millReceivedTime: { type: Number, max: 10000000, comment: "Mill Received Time, p_number, false, true, true, true, true, true, true, , , , ," },
millDespatchTime: { type: Number, max: 10000000, comment: "Mill Despatch Time, p_number, false, true, true, true, true, true, true, , , , ," },
estateWeight: { type: Number, max: 10000000, comment: "Estate Weight, p_number, false, true, true, true, true, true, true, , , , ," },
millWeight: { type: Number, max: 10000000, comment: "Mill Weight, p_number, false, true, true, true, true, true, true, , , , ," },
millRejectedWeight: { type: Number, max: 10000000, comment: "Mill Rejected Weight, p_number, false, true, true, true, true, true, true, , , , ," },
penalty: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "Penalty, p, false, true, true, true, true, true, true, , , , ," },
oer: { type: Number, max: 10000000, comment: "OER, p_number, false, true, true, true, true, true, true, , , , ," },
cropHarvestedBy: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Crop Harvested By, p, false, true, true, true, true, true, true, , , , ," },

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