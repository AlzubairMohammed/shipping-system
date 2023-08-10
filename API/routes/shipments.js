const router = require("express").Router();
const { protect } = require("../middleware/auth");
const {
  createShipment,
  getShipments,
  getShipment,
} = require("../controllers/shipments");

router.post("/shipment", protect, createShipment);
router.get("/shipment/:id", protect, getShipment);
router.get("/shipments", protect, getShipments);

module.exports = router;
