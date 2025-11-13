"use strict";
exports.__esModule = true;
var mysql_1 = require("mysql");
var keys_1 = require("../keys");
var connection = mysql_1["default"].createConnection(keys_1["default"]);
exports["default"] = connection;
