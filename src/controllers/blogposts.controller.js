const axios = require('axios');

exports.findAll = (req, res) => {
    //fetch data from json placeholder to get list of API blog posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(apicall => {
            res.send(apicall.data)
        })
}
    

exports.findById = (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + req.params.id)
        .then(apicall => {
            res.send(apicall.data)
        })
}