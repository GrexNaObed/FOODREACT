import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, './', 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'build', 'index.html'))
    console.log((path.resolve(__dirname, './', 'build')));
})


app.listen(PORT)