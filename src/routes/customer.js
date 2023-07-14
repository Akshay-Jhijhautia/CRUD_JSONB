const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.js");

router.get("/getCustomers", customerController.getAllCustomers);
router.post("/createCustomer", customerController.createCustomerData);
router.delete("/deleteCustomer/:id", customerController.deleteCustomer);

module.exports = router;
