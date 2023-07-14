const Pool = require("pg").Pool;

const customerQueries = require("../utils/queries.js");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "customer",
  password: "root",
  port: 5432,
});

function getAllCustomers() {
  return new Promise((resolve, reject) => {
    pool.query(customerQueries.getAllCustomers, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
}

function getAllNames() {
  return new Promise((resolve, reject) => {
    pool.query(customerQueries.getAllCustomerNames, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
}

function getCustomerDetail(name) {
  return new Promise((resolve, reject) => {
    pool.query(customerQueries.getACustomerDetail, [name], (error, results) => {
      if (results.rowCount === 0) {
        reject({ message: "Customer does not exist" });
      }
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
}

function getIdSubmittedByUser(name) {
  return new Promise((resolve, reject) => {
    pool.query(
      customerQueries.idsSubmittedByCustomer,
      [name],
      (error, results) => {
        if (results.rowCount === 0) {
          reject({ message: "No Id Submitted by the user" });
        }
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
  });
}

function createCustomerData(data) {
  return new Promise((resolve, reject) => {
    pool.query(
      customerQueries.createCustomer,
      [data.customer_details, data.address],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
}

function deleteCustomer(id) {
  return new Promise((resolve, reject) => {
    pool.query(customerQueries.deleteCustomer, [id], (error, results) => {
      if (results.rowCount === 0) {
        reject({ message: "Customer does not exist" });
      }
      if (error) {
        reject(error);
      }
      resolve({ message: "Customer Deleted" });
    });
  });
}

module.exports = {
  getAllCustomers,
  createCustomerData,
  deleteCustomer,
  getAllNames,
  getCustomerDetail,
  getIdSubmittedByUser,
};
