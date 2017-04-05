'use strict';

const util = require('./../util');
const expect = require('chai').expect;

describe("Unit test for simple utility", function(){
  it("Should add up to 5", function () {
    expect(util.add_up(2,3)).to.be.equal(5);
  });
});
