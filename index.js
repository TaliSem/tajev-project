console.log("app is loading");
const express = require("express");
const UsersRouterHelper = require('./UsersRouterHelper');
const routeHelper = require("./routeHelper");
const routeHelperC = require("./calender/routeHelper")
const multer = require("multer");
const upload = multer();
const passport = require('passport');
const bobyParser = require('body-parser');
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const { google } = require('googleapis');
// used for json inside body 
app.use(express.json());
app.use(express.static('static'));


mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/APIAuthenticationTEST", {
    useNewUrlParser: true
  });
} else {
  mongoose.connect("mongodb://localhost/APIAuthentication", {
    useNewUrlParser: true
  });
}



///-----------users----------//










//------------------google api


app.use(morgan("dev"));
app.use(bobyParser.json());

//Routes

// app.use("/users" ,require('./routers/users'));





//---------------------------------------------------------------------------------------

app.post("/users/forgotPassword", (req, res) => {
  routeHelper.forgotPassword(req, res);
});

app.post("/users/newUser", (req, res) => {
  routeHelper.newUser(req, res);
})


app.put("/users/resetPassword", (req, res) => {
  console.log("resetPassword");
  routeHelper.resetPassword(req, res);
});


app.post("/users/login", (req, res) => {
  routeHelper.login(req, res);
});



app.post("/users/register", (req, res) => {
 routeHelper.register(req, res);
});

app.post("/users/forgotPassword", (req, res) => {
  console.log("forgotPassword");
  routeHelper.forgotPassword(req, res);
});

app.post("/users/newUser", (req, res) => {
  console.log("newUser");
  routeHelper.newUser(req, res);
});

app.put("/users/resetPassword", (req, res) => {
  console.log("resetPassword");
  routeHelper.resetPassword(req, res);
});


//--------------------calender
app.post("/users/:id/calender", (req, res) => {
  console.log("calender");
  routeHelperC.Calender(req, res);
});

app.post("/api/purpose", (req, res) => {
  console.log("Purpose");
  routeHelperC.Purpose(req, res);
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


