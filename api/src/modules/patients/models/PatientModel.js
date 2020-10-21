import mongoose from "mongoose";

//Habilidades de la evaluacion inicial
const PatientSchema = new mongoose.Schema({
  name: { type: String },
  lastname: { type: String },
  dateOfBirth: { type: Date },
  treatmentStartDate: { type: Date },
  coordinator: { type: String },
  therapist: { type: String },
  observations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Observation" }],
  evaluations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Evaluation" }],
});

const PatientModel = mongoose.model("Patient", PatientSchema);

module.exports = PatientModel;
