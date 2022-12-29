const express = require('express');
const dbConn = require('./config/db.conn');
const app = express();
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
dbConn();
app.use('/user',userRoutes);
app.use('/contact',contactRoutes);

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})