const mongoose = require('mongoose');


// A solo file to connect to the database
mongoose.connect('mongodb://localhost:27017/friendsDB', 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true
	})
.then(()=>{
	console.log('connected');
	})
.catch((e)=>{
	console.log("Something went wrong", e);
	})