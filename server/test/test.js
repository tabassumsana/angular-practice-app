const UserModel = require('../models/user.js');
const User = require('../routes/users.js');
const expect = require('chai').expect;
var assert = require('assert');
var request = require('request');



describe('A basic test', () => {  

	it('Main page content', function() {
    	request('http://localhost:3000' , function(error, response, body) {
        	expect(body).to.equal('My test case');
   		 });
	});
	it('should pass', () => {
	  expect(true).to.be.true;
	})
	
});
describe('tests the add file' , function(done) {
	it('adds two numbers', () => {
		var sum=UserModel.add(1,1);
		assert.equal(sum, 2);
		//done();  you should use done only if you have async function at the test if not then dont use it.
	});
});

describe('Testing', function() {
  describe('String function', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
     it('should return the position when the value is present', function() {
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });
});

