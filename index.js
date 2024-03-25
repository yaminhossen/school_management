const express = require("express");
const server = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const allRoutes = require("./routes/all.routes");
const checkAuthMiddleware = require("./app/middlewares/checkAuth.middleware");
const frontendCommonDataMiddleware = require("./app/middlewares/frontendCommonData.middleware");
const mongoose = require("mongoose");
// const { db_url } = require("./configs/db.config");
var cookieParser = require('cookie-parser')
const formData = require('express-form-data');
var cors = require('cors');
const log = require("./app/utilites/log");
const logger = require("./app/utilites/logger");

// parse application/x-www-form-urlencoded
// server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser())
server.use(cors())
// parse application/json 01965522673
server.use(bodyParser.json());
server.set('json spaces', 4);
server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))
server.use(formData.parse());

server.set("trust proxy", 1); // trust first proxy
server.use(
	session({
		secret: "s3Cur3",
		name: "session1",
	})
);
server.set("view engine", "ejs");
server.set("views", "./views");
server.use(express.static("public"));

server.use((req, res, next) => {
	server.locals.error = {};
	server.locals.old = {};
	if(req.session.error){
		server.locals.error = req.session.error;
		req.session.error = {}
	}
	if(req.session.old){
		server.locals.old = req.session.old;
		req.session.old = {}
	}
	checkAuthMiddleware(server, req, res, next);
	// frontendCommonDataMiddleware(server, req, res, next);
	next();
});

// routes
server.use("/api",allRoutes(server));

// mongoose.connect("mongodb+srv://mongo:0h4lYcX9RCOo8pHn@cluster0.gn949by.mongodb.net/blogDB")
// 	.then(()=>{
// 		console.log('db connected');
// 	});

// const db_url = "mongodb+srv://mongo:0h4lYcX9RCOo8pHn@cluster0.gn949by.mongodb.net/blogDB";
// port
const PORT = process.env.PORT || 8082

// server
server.listen(PORT, ()=>{
    console.log(`server in running on port http://127.0.0.1:${PORT}`);
})



