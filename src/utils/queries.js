const getAllCustomers = `SELECT * FROM customer_data`;
const createCustomer = `INSERT INTO customer_data (customer_details,address) VALUES($1,$2) RETURNING *`;
const deleteCustomer = `DELETE FROM customer_data WHERE id = $1`;

module.exports = { getAllCustomers, createCustomer, deleteCustomer };
