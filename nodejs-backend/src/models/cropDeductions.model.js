
    module.exports = function (app) {
        const modelName = "crop_deductions";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            january: { type: Number, max: 10000000, comment: "January, p_number, false, true, true, true, true, true, true, , , , ," },
february: { type: Number, max: 10000000, comment: "February, p_number, false, true, true, true, true, true, true, , , , ," },
march: { type: Number, max: 10000000, comment: "March, p_number, false, true, true, true, true, true, true, , , , ," },
april: { type: Number, max: 10000000, comment: "April, p_number, false, true, true, true, true, true, true, , , , ," },
may: { type: Number, max: 10000000, comment: "May, p_number, false, true, true, true, true, true, true, , , , ," },
june: { type: Number, max: 10000000, comment: "June, p_number, false, true, true, true, true, true, true, , , , ," },
july: { type: Number, max: 10000000, comment: "July, p_number, false, true, true, true, true, true, true, , , , ," },
august: { type: Number, max: 10000000, comment: "August, p_number, false, true, true, true, true, true, true, , , , ," },
september: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "September, p, false, true, true, true, true, true, true, , , , ," },
october: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "October, p, false, true, true, true, true, true, true, , , , ," },
november: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "November, p, false, true, true, true, true, true, true, , , , ," },
december: { type:  String , minLength: 1, maxLength: 1000, index: true, trim: true, comment: "December, p, false, true, true, true, true, true, true, , , , ," },

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