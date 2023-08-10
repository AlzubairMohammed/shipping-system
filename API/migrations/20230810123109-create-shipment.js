"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Shipments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      senderName: {
        type: Sequelize.STRING,
      },
      senderNumber: {
        type: Sequelize.INTEGER,
      },
      senderEmail: {
        type: Sequelize.STRING,
      },
      senderAdress: {
        type: Sequelize.TEXT,
      },
      recipientName: {
        type: Sequelize.STRING,
      },
      recipientNumber: {
        type: Sequelize.INTEGER,
      },
      recipientEmail: {
        type: Sequelize.STRING,
      },
      recipientAdress: {
        type: Sequelize.TEXT,
      },
      shipmentType: {
        type: Sequelize.STRING,
      },
      shipmentWeight: {
        type: Sequelize.DECIMAL,
      },
      shipmentSize: {
        type: Sequelize.DECIMAL,
      },
      shipmentDeliveryDate: {
        type: Sequelize.DATE,
      },
      moreData: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Shipments");
  },
};
