var express = require('express');
var path = require('path');

//서버를 생성합니다.
var app = express();

var port = 52279;

app.use(express.static(path.join(__dirname, 'cookies')));

// 서버를 실행합니다.
app.listen(port, function(){
    console.log("Server Running at http://127.0.0.1:"+`${port}`);
    console.log("Server Running at http://heartmade.club:"+`${port}`);
});
