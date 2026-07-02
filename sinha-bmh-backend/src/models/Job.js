// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     department: { type: String, required: true },
//     location: { type: String, required: true },
//     type: { type: String, required: true },       // Added
//     experience: { type: String },                 // Added
//     salary: { type: String },                     // Added
//     vacancies: { type: Number, default: 1 },      // Added
//     description: { type: String },
//     active: {                                     // Added to match frontend job.active
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Job", jobSchema);


// models/Job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },       
    experience: { type: String },                 
    salary: { 
      type: String, 
      default: "Not Disclosed" // 👈 Automatically applied if salary is undefined/omitted
    },                    
    vacancies: { type: Number, default: 1 },      
    description: { type: String },
    active: {                                     
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);