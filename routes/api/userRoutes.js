const router = require("express").Router();
const passport = require('passport');

const userController = require("../../controller/usersController"); 

//matching with "/api/user/login"
router
  .route('/login')
  .post(passport.authenticate('local'), function(req, res){
    //login in send back user info
    console.log(req.user);
    res.json(req.user);
  })
  .get(function(req, res){
    //check to see if user is logged in
    console.log(req.user);
    if(req.user){
      //If logged in, send back flag and the username
      //NOTE: can send back whatever you want here
      res.json({isLoggedIn: true, username: req.user.username});
    }else {
      //if user isn't logged in, send back false
      res.json(false);
    }
  });


  //logout route
  router 
    .route('/logout')
    .get(function(req, res){
      //Log user out
      req.logout()
      console.log(req.user);
      res.json(false);
    })

    //Matches with "/api/user/:id"
    router
      .route('/:id')
      .get(userController.findById)
      .put(userController.update)
      .delete(userController.remove);

    // register a new user ("/api/user/register")
    router
      .route('/register')
      .post(userController.register);

    //workout stats route
    router
    .route('/stats')
    .post(userController.create)
    .put(userController.update)

    module.exports = router;