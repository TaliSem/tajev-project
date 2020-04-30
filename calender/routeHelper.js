const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
const myDb = "SpeechTherapist";
const calenderColl = "calender";
const PurposeColl = "Purpose";



function Calender(req,res){
    console.log("calender is accessed");

    MongoClient.connect(url, function(err, db) {
      if (err) {
    console.log(err);
    return res.sendStatus(500);
    
      }
      const dbo = db.db(myDb);
      const queryUser = req.body

    dbo.collection(calenderColl).insertOne(queryUser, function(err, result) {
            if (err){
              console.log(err);
              return res.sendStatus(500);
              
                }
                else{
                  res.status(201).send(queryUser);
                  console.log(queryUser);
                }
          
        });
    });
};


function Purpose(req,res){
    console.log("Purpose is accessed");

    MongoClient.connect(url, function(err, db) {
      if (err) {
    console.log(err);
    return res.sendStatus(500);
    
      }
      const dbo = db.db(myDb);
      const queryPurpose = req.body

    dbo.collection(PurposeColl).insertOne(queryPurpose, function(err, result) {
            if (err){
              console.log(err);
              return res.sendStatus(500);
              
                }
                else{
                  res.status(201).send(queryPurpose);
                  console.log(queryPurpose);
                }
          
        });
    });
};



module.exports.Calender = Calender;
module.exports.Purpose = Purpose;