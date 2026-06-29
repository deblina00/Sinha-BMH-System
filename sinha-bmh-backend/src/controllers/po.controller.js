import PurchaseOrder from "../models/PurchaseOrder.js";

export const createPO = async (req, res) => {
  try {
    const { title, clientName, poNumber, description } = req.body;
    const po =
      await PurchaseOrder.create({
        title,
        clientName,
        poNumber,
        description,
        fileUrl: req.file ? req.file.path : "",
      });

    res.status(201).json(po);
  } catch (error) {
    res.status(500).json({ message: error.message || "Failed to create Purchase Order" });
  }
};

export const getPOs = async (req, res) => {
  const pos =
    await PurchaseOrder.find().sort({
      createdAt: -1,
    });

  res.json(pos);
};

export const deletePO = async (req, res) => {
  await PurchaseOrder.findByIdAndDelete(
    req.params.id
  );

  res.json({
    success: true,
  });
};