const axios = require('axios');

exports.findAll = (req, res) => {
    //fetch all the todos from jsonplaceholder
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(apicall => {
            res.send(apicall.data)
    })
}

exports.findById = (req, res) => {
    //get todos by ID
    axios.get('https://jsonplaceholder.typicode.com/todos/' + req.params.id)
    .then(apicall => {
        res.send(apicall.data)
    })
}