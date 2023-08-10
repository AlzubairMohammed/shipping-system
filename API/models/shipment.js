"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shipment.init(
    {
      senderName: DataTypes.STRING,
      senderNumber: DataTypes.INTEGER,
      senderEmail: DataTypes.STRING,
      senderAdress: DataTypes.TEXT,
      recipientName: DataTypes.STRING,
      recipientNumber: DataTypes.INTEGER,
      recipientEmail: DataTypes.STRING,
      recipientAdress: DataTypes.TEXT,
      shipmentType: DataTypes.STRING,
      shipmentWeight: DataTypes.DECIMAL,
      shipmentSize: DataTypes.DECIMAL,
      shipmentDeliveryDate: DataTypes.DATE,
      moreData: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Shipment",
    }
  );
  return Shipment;
};
