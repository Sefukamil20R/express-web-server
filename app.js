const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 3000;
// load environment variables
dotenv.config();
app.use(cors());

// 
app.get('/name', (req,res) =>
{
    res.status(200).send('Hey there ! My name is Sefina');
})
app.get('/hobby', (req,res)=>
{
    res.status(200).json({hobby : 'Eating Food'}); 
    console.log(req.body);
})
app.get('/dream', (req,res)=>
{
    res.status(200).send('My dream is to become a successful Software Engineer and watching my parents proud of me');
    console.log(req.body);

})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});