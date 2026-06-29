import mongoose from "mongoose";

const poSchema = new mongoose.Schema(
  {
    title: String,
    clientName: String,
    poNumber: String,
    description: String,
    fileUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "PurchaseOrder",
  poSchema
);