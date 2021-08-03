const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const numString = req.body.numbers;
    const myArr = numString.split(",");
    const n = myArr.length;
    var flag = 0;
    var evens = [];
    var odds = [];
    for(let i = 0; i < n; i++){
        const parsed = parseInt(myArr[i], 10);
        if (!isNaN(parsed)){
            if(parsed%2){
                odds.push(parsed);
            }
            else{
                evens.push(parsed);
            }
        }
        else{
            flag = 1;
            break;
        }
    }
    if(flag === 1){
        const result = {"is_success": false, "user_id": "anushka_lavania_29122000"};
        res.json(result);
    }
    else{
        const result = {"is_success": true,
        "user_id": "anushka_lavania_29122000",
        "odd": odds,
        "even": evens};
        res.json(result);
    }
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});