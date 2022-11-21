//
const express = require("express");
const mongoose = require("mongoose")
const path = require('path')
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://Lidya:generate@cluster0.82urtac.mongodb.net/siswa?retryWrites=true&w=majority', () => { console.log('database conected') });

}
//
const route = require("./router/router")
app.use('/', route)

app.listen(3200, () => { console.log("server is up and running") })