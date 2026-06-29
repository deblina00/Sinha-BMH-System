import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sinha-bmh",
    // Remove "resource_type: 'auto'" and specify allowed formats instead.
    // Cloudinary's API will automatically adjust asset type ingestion if these are explicitly defined.
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
  },
});

const upload = multer({
  storage: storage,
});

export default upload;