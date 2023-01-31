//npm init --yes
//npm install express ip

const express = require('express') 
const ip = require("ip")

const app = express ()
const ipAddress = ip.address() 
const ipPort = 4000

app.use(express.json({
    inflate: true, 
    limit: '100kb',
    reviver: null, 
    strict: true,
    type: 'application/json', 
    verify: undefined
}))

app.post('/json', (req, res) => { 
    console.log(req.body)
    res.json({ 'Message': 'JSON-Listener => OK!' }) 
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))