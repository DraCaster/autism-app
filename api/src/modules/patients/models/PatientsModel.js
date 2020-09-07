import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

// Defining Patients Mongoose Schema
const PatientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    identification: {
      type: String,
      required: true,
      unique: true, 
    },
    dob: {
      type: Date,
    },
    startDateOfTreatment: {
      type: Date,
    },
    endDateOfTreatment: {
      type: Date,
    },
  },
  { timestamps: true }
);

//PatientsSchema.set('toJSON', {getters: true});

PatientsSchema.plugin(uniqueValidator, { message: "validation.unique" });

const PatientsModel = mongoose.model("Patients", PatientsSchema);

module.exports = PatientsModel;
