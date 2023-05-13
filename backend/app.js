const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv=require("dotenv");


// app.use(fileupload({useTempFiles: true}))


const errorMiddleware=require("./middleware/error");

//config
dotenv.config({path:"backend/config/config.env"});


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(fileUpload({useTempFiles: true}))

//Route Imports
const product=require("./routes/productRoute");
const user = require("./routes/userRoute");
const order=require("./routes/orderRoute");
const payment =require("./routes/paymentRoute");



app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);


//middleware for error
app.use(errorMiddleware);

module.exports=app