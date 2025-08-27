import express from "express";

const router = express.Router();

// Example construction route
router.get("/construction", (req, res) => {
  res.status(200).json({ message: "Under construction!" });
});

export default router;
