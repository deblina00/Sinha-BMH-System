// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema(
//   {
//     title: String,
//     department: String,
//     location: String,
//     description: String,
//     status: {
//       type: String,
//       default: "Open",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Job", jobSchema);

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },       // Added
    experience: { type: String },                 // Added
    salary: { type: String },                     // Added
    vacancies: { type: Number, default: 1 },      // Added
    description: { type: String },
    active: {                                     // Added to match frontend job.active
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);