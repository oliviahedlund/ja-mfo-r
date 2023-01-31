//npm init --yes
//npm install express ip axios

const express = require('express')
const ip = require('ip')

const app = express ()
const ipAddress = ip.address()
const ipPort = 3000

app.use(express.json({ 
    inflate: true,
    limit: '100kb', 
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined 
}))

///////////////////////////////////////////////////////////
app.post('/json', (req, res) => {
    let ans = "" 
    let x1 , x2
    
    switch (req.body['MessageType']) {
        case 'Command':
            if (req.body['Numbers'].length < 2) {
                ans = "Please send at least TWO numbers!" 
            }

            x1 = req.body['Numbers']
            switch (req.body['NodeCommand']) { 
                case 'Add':
                    ans = x1[0]
                    for (x2 = 1; x2 < x1.length; x2++) {
                        ans = ans + x1[x2] 
                    }
                    break

                case 'Subtract': 
                    ans = x1[0]
                    for (x2 = 1; x2 < x1.length; x2++) {
                        ans = ans - x1[x2]
                    }
                    break

                case 'Multiply': 
                    ans = x1[0]
                    for (x2 = 1; x2 < x1.length; x2++) {
                        ans = ans * x1[x2]
                    }
                    break

                case 'Divide': 
                    ans = x1[0]
                    for (x2 = 1; x2 < x1.length; x2++) {
                        ans = ans / x1[x2]
                    }
                    break
            }

            break
        default:
            ans += ` => Unknown Message Type => ${req.body['MessageType']} !!! `
    }
    
    res.json({
        'NodeCommand': req.body['NodeCommand'],
        'Numbers': req.body['Numbers'],
        'Answer': ans 
    })
})

app.listen(ipPort, console.log(`Listening to ${ipAddress}:${ipPort} !!!`))