import Joi from "joi";

export const createJobSchema =
 Joi.object({

  title:Joi.string()
   .required(),

  department:Joi.string()
   .required(),

  location:Joi.string()
   .required(),

  description:Joi.string()
   .required()

 });