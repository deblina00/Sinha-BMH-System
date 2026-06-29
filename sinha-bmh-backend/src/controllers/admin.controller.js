// src/controllers/admin.controller.js
import Job from "../models/Job.js";                 // Adjust paths to your actual models
import Application from "../models/Application.js";
import PurchaseOrder from "../models/PurchaseOrder.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Fetch all counts in parallel for optimal performance
    const [
      totalJobs,
      totalApplications,
      totalPurchaseOrders,
      pendingApplications,
      shortlistedApplications,
      selectedApplications
    ] = await Promise.all([
      Job.countDocuments({}),
      Application.countDocuments({}),
      PurchaseOrder.countDocuments({}),
      Application.countDocuments({ status: "pending" }),
      Application.countDocuments({ status: "shortlisted" }),
      Application.countDocuments({ status: "selected" }),
    ]);

    return res.status(200).json({
      totalJobs,
      totalApplications,
      totalPurchaseOrders,
      pendingApplications,
      shortlistedApplications,
      selectedApplications,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};