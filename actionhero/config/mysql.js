"use strict";

exports.default = {
  mysql: () => {
    const dbconfig = {
      host: "127.0.0.1",
      prot: 3306,
      user: "root",
      password: "playauto",
      database: "loginDb",
      charset: "utf8_general_ci",
      timezone: "Asia/Seoul",
      multipleStatements: true,
      debug: false,
      trace: false,
    };

    return dbconfig;
  },
};
