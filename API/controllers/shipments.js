const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const { Shipment } = require("../models");
exports.createShipment = asyncHandler(async (req, res, next) => {
  try {
    let undefinedError = {};
    const {
      senderName,
      senderNumber,
      senderEmail,
      senderAdress,
      recipientName,
      recipientNumber,
      recipientEmail,
      recipientAdress,
      shipmentType,
      shipmentPrice,
      shipmentWeight,
      shipmentSize,
      shipmentDeliveryDate,
      moreData,
    } = req.body;
    console.log(req.body);
    if (!senderName)
      (undefinedError.err = true),
        (undefinedError.senderName = "you must to add sender's name !");
    if (!senderNumber)
      (undefinedError.err = true),
        (undefinedError.senderNumber = "you must to add sender's number !");
    if (!senderEmail)
      (undefinedError.err = true),
        (undefinedError.senderEmail = "you must to add sender's email !");
    if (!senderAdress)
      (undefinedError.err = true),
        (undefinedError.senderAdress = "you must to add sender's adress !");
    if (!recipientName)
      (undefinedError.err = true),
        (undefinedError.recipientName = "you must to add rescipient's name !");
    if (!recipientNumber)
      (undefinedError.err = true),
        (undefinedError.recipientNumber =
          "you must to add recipient's number !");
    if (!recipientEmail)
      (undefinedError.err = true),
        (undefinedError.recipientEmail = "you must to add recipient's email !");
    if (!recipientAdress)
      (undefinedError.err = true),
        (undefinedError.recipientAdress =
          "you must to add recipient's adress !");
    if (!shipmentType)
      (undefinedError.err = true),
        (undefinedError.shipmentType = "you must to add shipment type !");
    if (!shipmentPrice)
      (undefinedError.err = true),
        (undefinedError.shipmentPrice = "you must to add shipment price !");
    if (!shipmentWeight)
      (undefinedError.err = true),
        (undefinedError.shipmentWeight = "you must to add shipment weight !");
    if (!shipmentSize)
      (undefinedError.err = true),
        (undefinedError.shipmentSize = "you must to add shipment size !");
    if (!shipmentDeliveryDate)
      (undefinedError.err = true),
        (undefinedError.shipmentDeliveryDate =
          "you must to add shipment delivery date !");
    if (undefinedError.err) return res.status(404).json(undefinedError);
    const shipment = await Shipment.create({
      senderName,
      senderNumber,
      senderEmail,
      senderAdress,
      recipientName,
      recipientNumber,
      recipientEmail,
      recipientAdress,
      shipmentType,
      shipmentPrice,
      shipmentWeight,
      shipmentSize,
      shipmentDeliveryDate,
      moreData,
    });
    if (shipment) {
      return res.status(200).json({ success: true, msg: `Shipment created` });
    }
  } catch {
    return next(new ErrorResponse());
  }
});

exports.getShipment = async (req, res) => {};

exports.getShipments = asyncHandler(async (req, res, next) => {
  const shipments = await Shipment.findAll();
  if (!shipments) return next(new ErrorResponse("shipments not found", 404));
  if (shipments) return res.status(200).json(shipments);
  next(new ErrorResponse());
});
