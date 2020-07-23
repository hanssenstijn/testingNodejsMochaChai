"use strict";

const { expect } = require("chai");

var user = { name: 'Scott' };
expect(user).to.have.property('name')

exprect({}).to.exist;
expect(26).to.equal(26);
expect(false).to.be.false;
expect('hello').to.be.string;
expect([1, 2, 3]).to.not.be.empty;
expect([1, 2, 3]).to.have.length.of.at.least(3);
expect([1, 2]).to.be.an('array').that.does.not.include(3);
