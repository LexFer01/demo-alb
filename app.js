const express = require('express')

const app = express()
const instance = process.env.INSTANCE || ""


app.get('/ping', (req, res)=>{
    res.json({message: 'pong'})
})

app.get('/', (req, res) => {
    res.json({message: 'Hello!!', from: instance})
})


app.listen(3000, ()=>{
    console.log('SERVER LISTEN');
})