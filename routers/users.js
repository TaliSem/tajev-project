const express = require('express');
const router = require('express-promise-router')();

const UsersController = require('../controllers/users');


router.route('/signup')
  .post(UsersController.signUp);

router.route('/signin')
  .post(UsersController.signIn);

router.route('/signout')
  .get( UsersController.signOut);


module.exports = router;