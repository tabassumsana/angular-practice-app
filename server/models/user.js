const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date
    //required: true
  }
});



const User = module.exports = mongoose.model('User', UserSchema);

module.exports.add = function(i, j) {
  return i + j;
};

  /*module.exports.add = function(a,b){
    return a+b;
}*/
//module.exports.Add = add;
//const Add = module.exports = add;

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmailId = function(email, callback){
  const query = {"email": email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  console.log(newUser);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  }); 
}
module.exports.comparePassword = function(enteredPassword, userpassword, callback){
  bcrypt.compare(enteredPassword, userpassword, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
module.exports.saveUser = function(user, callback){
   console.log(user);
   user.save(callback);

}