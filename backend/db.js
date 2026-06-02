const sql = require("mssql");

const config = {
  user: "your_username",
  password: "your_password",
  server: "localhost",
  database: "FixLocalDB",
  options: {
    trustServerCertificate: true,
  },
};

sql.connect(config)
  .then(() => {
    console.log("SQL Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sql;