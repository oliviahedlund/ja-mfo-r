//npm install axios

const axios = require('axios');
const urlListener = 'http://localhost:4000/json'

var jsonA , jsonB , arrJsons

jsonA = {
    'Name': 'John',
    'Family': 'Smith', 
    'Occupation': 'Carpenter'
}

jsonB = {
    'Name': 'Alex',
    'Family': 'Williams', 
    'Occupation': 'Electrician'
}

arrJsons = [] 
arrJsons.push(jsonA)
arrJsons.push(jsonB)


axios.post(urlListener , jsonA)
    .then((res) => { 
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err); 
    })
//sender => { Message: 'JSON-Listener => OK!' }
//listener => { Name: 'John', Family: 'Smith', Occupation: 'Carpenter' }



function sendAxiosPost(url, dataObj) {
    axios.post(url, dataObj) 
    .then((res) => {
        console.log(res.data); 
    })
    .catch((err) => { 
        console.log(err);
    })
}

sendAxiosPost(urlListener , jsonB)
//sender => { Message: 'JSON-Listener => OK!' }
//listener => { Name: 'Alex', Family: 'Williams', Occupation: 'Electrician' }

sendAxiosPost(urlListener , 
    {
    'Name': 'Michel', 
    'Family': 'Goldberg',
    'Occupation': 'Plumber' 
    }
)
//sender => { Message: 'JSON-Listener => OK!' }
//listener => { Name: 'Michel', Family: 'Goldberg', Occupation: 'Plumber' }

sendAxiosPost(urlListener , arrJsons)
//sender => { Message: 'JSON-Listener => OK!' } //listener =>
//[
// { Name: 'John', Family: 'Smith', Occupation: 'Carpenter' },
// { Name: 'Alex', Family: 'Williams', Occupation: 'Electrician' } 
//]