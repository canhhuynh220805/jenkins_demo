"use strict";

const test = require("node:test");
const assert = require("node:assert");
const {add} = require("../src/index");

test("add", () => {
  assert.strictEqual(add(1, 2), 3);
});
