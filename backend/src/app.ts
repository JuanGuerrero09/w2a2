import express from 'express'

const app = express()

const PORT = 8000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log('my project listening in port 8000')
})