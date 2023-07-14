const customerServices = require("../services/customer.js");

async function getAllCustomers(req, res) {
  try {
    const customer = await customerServices.getAllCustomers();
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getAllNames(req, res) {
  try {
    const customer = await customerServices.getAllNames();
    return res.status(200).json({ Customers: customer });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function getCustomerDetails(req, res) {
  try {
    const customer = await customerServices.getCustomerDetail(req.body.name);
    return res.status(200).json({ Customers: customer });
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function createCustomerData(req, res) {
  try {
    const customer = await customerServices.createCustomerData({
      customer_details: req.body.customer_details,
      address: req.body.address,
    });
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function deleteCustomer(req, res) {
  try {
    const customer = await customerServices.deleteCustomer(req.params.id);
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAllCustomers,
  createCustomerData,
  deleteCustomer,
  getAllNames,
  getCustomerDetails,
};
