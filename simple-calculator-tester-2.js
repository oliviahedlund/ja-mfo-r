const axios = require('axios');
const urlCalculator = 'http://localhost:3000/json'

function sendAxiosPost(url, dataObj) {
    axios.post(url, dataObj) 
        .then((res) => {
            console.log(res.data); 
        })
        .catch((err) => { 
            console.log(err);
        })
}

sendAxiosPost(urlCalculator , {
    MessageType: 'Command', 
    NodeCommand: 'Add',
    Numbers: [103, 2053, 154, 920]
    //Answer => 103 + 2053 + 154 + 920 = 3230
})

sendAxiosPost(urlCalculator , { 
    MessageType: 'Command',
    NodeCommand: 'Subtract', 
    Numbers: [118, 27, 32, 15]
    //Answer => 118 - 27 - 32 - 15 = 44
})

sendAxiosPost(urlCalculator , {
    MessageType: 'Command', 
    NodeCommand: 'Multiply',
    Numbers: [12, 132, 75]
    //Answer => 12 * 132 * 7512 = 118800
})

sendAxiosPost(urlCalculator , { 
    MessageType: 'Command',
    NodeCommand: 'Divide', 
    Numbers: [36855, 13, 63, 5, 3]
    //Answer => 36855 / 13 / 63 / 5 / 3 = 3
})