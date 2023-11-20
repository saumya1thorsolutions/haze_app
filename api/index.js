const express = require("express"); // imports express js framework
const cfg = require("dotenv"); // imports dotenv library
cfg.config();
const _ = require("lodash"); // library
const app = express();
const port = _.get(process.env,"PORT",3000);
app.listen(port,()=>{
    console.log(`Your app is running on ${port}.`);
});