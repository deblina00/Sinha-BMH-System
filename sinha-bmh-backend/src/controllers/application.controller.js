import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  const application =
    await Application.create({
      ...req.body,
      resumeUrl: req.file.path,
    });

  res.status(201).json({
    success: true,
    message:
      "Application submitted successfully",
    application,
  });
};

export const getApplications = async (
  req,
  res
) => {
  const apps = await Application.find()
    .populate("jobId")
    .sort({ createdAt: -1 });

  res.json(apps);
};