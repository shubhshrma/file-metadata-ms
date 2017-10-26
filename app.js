var bodyParser = require('body-parser');
var express = require('express');
var app = module.exports = express();
var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + "/index.html");
});

app.post('/upload', upload.single('file'), function(req, res, next){

});
app.listen(3001, () => {
	console.log("Server listening on port: 3001");
});