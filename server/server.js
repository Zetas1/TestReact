const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/src', express.static(path.resolve(__dirname, '../app/images')));

app.get('*', (req, res) => {
	return res.sendFile(path.resolve(__dirname, '../index.html'));
});

const port = process.env.PORT || 3000;
	server.listen(port, () => {
	console.log('http://localhost:3000');
});
