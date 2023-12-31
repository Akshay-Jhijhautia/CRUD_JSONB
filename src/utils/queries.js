const getAllCustomers = `SELECT * FROM customer_data`;
const getAllCustomerNames = `SELECT customer_details -> 'name' As Name from customer_data`;
const getACustomerDetail = `SELECT * FROM customer_data WHERE customer_details ->> 'name' = $1`;
const createCustomer = `INSERT INTO customer_data (customer_details,address) VALUES($1,$2) RETURNING *`;
const deleteCustomer = `DELETE FROM customer_data WHERE id = $1`;
const idsSubmittedByCustomer = `SELECT customer_details -> 'idSubmitted' As Id , customer_details -> 'phoneNumber' As Phone_Number from customer_data where customer_details ->> 'name' = $1`;
const updatePhoneNumber = `UPDATE customer_data SET customer_details['phoneNumber'] = to_jsonb($1::jsonb) WHERE customer_details ->> 'name' = $2`;

module.exports = {
  getAllCustomers,
  createCustomer,
  deleteCustomer,
  getAllCustomerNames,
  getACustomerDetail,
  idsSubmittedByCustomer,
  updatePhoneNumber,
};
