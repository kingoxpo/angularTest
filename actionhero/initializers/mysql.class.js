const { Initializer, api } = require("actionhero");

const Promise = require("bluebird");
const mysql = require("mysql");
const Pool = require("mysql/lib/Pool");
const Connection = require("mysql/lib/Connection");

//mysql 함수 비동기 처리
Pool.prototype.queryAsync = Promise.promisify(Pool.prototype.query);
Pool.prototype.getConnectionAsync = Promise.promisify(
  Pool.prototype.getConnection
);
Connection.prototype.queryAsync = Promise.promisify(Connection.prototype.query);
Connection.prototype.beginTransactionAsync = Promise.promisify(
  Connection.prototype.beginTransaction
);
Connection.prototype.commitAsync = Promise.promisify(
  Connection.prototype.commit
);
Connection.prototype.rollbackAsync = Promise.promisify(
  Connection.prototype.rollback
);

module.exports = class Mysql extends Initializer {
  constructor() {
    super();
    this.name = "mysql";
    this.loadPriority = 1000;
    this.startPriority = 1000;
    this.stopPriority = 1000;
  }

  async initialize() {
    const pool = mysql.createPool(api.config.mysql);
    api.Mysql = pool;
  }

  async start() {}

  async stop() {}
};
