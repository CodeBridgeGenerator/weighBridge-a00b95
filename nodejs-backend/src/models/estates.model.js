
    module.exports = function (app) {
        const modelName = "estates";
        const mongooseClient = app.get("mongooseClient");
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            estateCode: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate Code, p, false, true, true, true, true, true, true, , , , ," },
estateName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Estate Name, p, false, true, true, true, true, true, true, , , , ," },
companyName: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Company Name, p, false, true, true, true, true, true, true, , , , ," },
addressOne: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address One, p, false, true, true, true, true, true, true, , , , ," },
addressTwo: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address Two, p, false, true, true, true, true, true, true, , , , ," },
addressThree: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Address Three, p, false, true, true, true, true, true, true, , , , ," },
telephone: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Telephone, p, false, true, true, true, true, true, true, , , , ," },
fax: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Fax, p, false, true, true, true, true, true, true, , , , ," },
remark: { type:  String , minLength: 2, maxLength: 1000, index: true, trim: true, comment: "Remark, p, false, true, true, true, true, true, true, , , , ," },

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