// import Joi from "joi";

// export const createJobSchema =
//  Joi.object({

//   title:Joi.string()
//    .required(),

//   department:Joi.string()
//    .required(),

//   location:Joi.string()
//    .required(),

//   description:Joi.string()
//    .required()

//  });

// validators/job.validator.js
import Joi from "joi";

export const createJobSchema = Joi.object({
  title: Joi.string().required(),
  department: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),

  // Explicitly allow it to be optional or passed as an empty string
  type: Joi.string().required(),
  experience: Joi.string().optional(),
  vacancies: Joi.number().optional(),
  salary: Joi.string().empty('').default('Not Disclosed').optional
})