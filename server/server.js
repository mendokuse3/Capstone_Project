//=============================
//      Dependencies
//=============================
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


//=============================
//  Environment Variable
//=============================
const app = express();
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/alttpr";
const PORT = process.env.PORT || 3000;

//=============================
//  Middleware
//=============================
app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static("public")); // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors({credentials: true, origin: 'http://localhost:3006'}));

//=============================
//  MongoDB Connection
//=============================
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log("Established Connection with mongo", mongoURI);
});

//======================
//  DB Messaging
//======================
mongoose.connection.on("error", (err) => console.log(err.message));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));


const notesController = require('./controllers/notes');

app.use('/notes', notesController);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static('client/build'));
    // index.html for all page routes html or routing and naviagtion
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}


//=================================================
// Listening on Port 3000
//=================================================
app.listen(PORT, () => {
    console.log(`Accessing Port... ${PORT}`);
  });