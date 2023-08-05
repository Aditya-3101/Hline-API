const mysql = require("mysql2");
let conn = null;

module.exports = function () {
  if (!conn) {
    conn = mysql.createPool({
      host: "bawsid2ij5moefmc4vkg-mysql.services.clever-cloud.com",
      user: "u59dm4pznjbqrdif",
      password: "lzkJeNoeRlGKzyaquymH",
      database: "bawsid2ij5moefmc4vkg",
      port: 3306,
    });
  }
  return conn;
};
