"use strict";
const { Action, api } = require("actionhero");

module.exports = class loginTest extends Action {
  constructor() {
    super();
    this.name = "loginTest";
    this.description = "loginTest API";
    this.inputs = {};
    this.outputExample = { status: true };
  }

  async run(data) {
    data.response.status = await api.Mysql.queryAsync(`select * from mem`);
  }
};
