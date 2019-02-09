const express = require('express')
const axios = require('axios')
const router = express.Router()
const serviceUrl = 'https://api.mercadolibre.com/sites/MLA/'

var axiosInstance = axios.create({
    baseURL: serviceUrl
})

const author = {
    name: 'Diego',
    lastname: 'Martinez' 
}


router.get('/items', function(req, res) {
    axiosInstance.get(`search?q=${req.query.q}`)
        .then(function(response){
            return res.json(response.data)
        })
        .catch(function(error) {
            console.log(error)
        })
    }
)


router.get('/items/:id', (req, res) => res.json({json:false}))


module.exports = router
