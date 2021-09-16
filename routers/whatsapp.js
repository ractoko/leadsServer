const express = require("express");
const WhatsAppWeb = require('baileys');
const WhatsAppController = require("../controllers/whatsapp");

const api = express.Router();

api.get("/whatsapp", WhatsAppController.whats);
api.get("/getWhat", 
function(req, res) {
    res.json({
      number: 1,
      name: 'John',
      gender: 'male'
    });
});

module.exports = api;
