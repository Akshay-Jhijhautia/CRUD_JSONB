const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.js");

router.get("/getCustomers", customerController.getAllCustomers);
router.get("/allCustomerNames", customerController.getAllNames);

router.post("/customerDetail", customerController.getCustomerDetails);
router.post("/createCustomer", customerController.createCustomerData);
router.post("/customerId", customerController.getCustomerId);

router.patch(
  "/updatePhoneNumber",
  customerController.updateCustomerPhoneNumber
);

router.delete("/deleteCustomer/:id", customerController.deleteCustomer);

module.exports = router;
