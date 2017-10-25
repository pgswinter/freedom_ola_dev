import express from 'express'

const app = express();

app.set('view engine', 'pug');

app.use(express.static("builds/app/")) // Set current patch inside the folder

app.listen(6969,'localhost', () => {
	console.log('Express listening on port', 6969)
})