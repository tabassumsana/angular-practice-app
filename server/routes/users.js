const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');


// test
router.get('/', (req, res, next) => {
 res.send('My test case')
});

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    dateofbirth: req.body.dateofbirth.momentObj
  });

  User.addUser(newUser, (err, user) => {
     console.log(newUser);
    if(err){
      res.json({success: false, msg:'Failed to register user', newUser: req.body.dateofbirth});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Edit
router.post('/editDoB', (req, res, next) => {
   
  const email = req.body.email;
 
  User.getUserByEmailId(email, (err, user) => { 
         user.dateofbirth = req.body.dateofbirth;
           User.saveUser(user, (err, user) => {
              if(err){
                res.json({success: false, msg:'Failed to save', user});
              } else {
                res.json({success: true, msg:'User saved'});
              }
            });
    });
});
// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmailId(email, (err, user) => {
    if(err) throw err;
    if(!user)
      res.json({success: false, msg: 'User not found', user: email});
    else{

      User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week that is user have to login every hald n hour or every one week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            email: user.email,
            dateofbirth: user.dateofbirth
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });

    }
    
  })
});



module.exports = router;
