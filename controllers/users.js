module.exports ={
    
    singUp:  async(req,res, next)=>{
        console.log('UsersController.singUp()  called' );

        const{email,password} = req.value.body;
        const newUser = new User({
            email: email,
            password : password
        });
          await newUser.save();

          res.json({user : 'created'})


    },
    singIn:  async(req,res, next)=>{
        console.log('UsersController.singIn()  called' )
    },
    secret:  async(req,res, next)=>{
        console.log('UsersController.singUp()  secret' )
    },


}