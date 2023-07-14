const getAllCustomers = `SELECT * FROM customer_data`;
const getAllCustomerNames = `SELECT customer_details -> 'name' As Name from customer_data`;
const getACustomerDetail = `SELECT * FROM customer_data WHERE customer_details ->> 'name' = $1`;

const createCustomer = `INSERT INTO customer_data (customer_details,address) VALUES($1,$2) RETURNING *`;

const deleteCustomer = `DELETE FROM customer_data WHERE id = $1`;

module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  getAllCustomerNames,
  getACustomerDetail,
};
