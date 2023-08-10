const router = require("express").Router();
const { protect } = require("../middleware/auth");
const { createShipment, getShipments } = require("../controllers/shipments");

router.post("/shipment", protect, createShipment);
router.get("/shipments", protect, getShipments);

module.exports = router;
