const express = require("express");
const router = express.Router();
const ShipwreckModel = require("../../models/shipwrecks/ShipwreckModel");

router.get("/all", async (req, res) => {
  const { skip } = req.query;
  const skipNum = Number(skip) || 0;

  const documentNum = await ShipwreckModel.estimatedDocumentCount();

  try {
    const shipwrecks = await ShipwreckModel.find()
      .sort({
        depth: "descending",
      })
      .limit(5)
      .skip(skipNum)
      .select(["feature_type", "chart", "depth"]);
    if (!shipwrecks) return res.send("Shipwreck is not found.");
    return res.status(200).send({ shipwrecks, documentNum });
  } catch (err) {
    return res.status(404).send(err.message);
  }
});

module.exports = router;
