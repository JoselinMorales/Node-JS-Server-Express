const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res. send('hello word of express');
});
 

app.get('/about',(req, res) => {
    res. send('this is a small express');
});
    

app.get('/contact-us',(req, res) => {
    res. send('my email is joselin.morales@gmail.com');
    
});
   

app.listen(port, ()=> {
    console.log(`server listerning on http://localhost:${port}`);
});
