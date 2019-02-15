const express = require('express')
const axios = require('axios')
const router = express.Router()
const serviceUrl = 'https://api.mercadolibre.com/sites/MLA/'

var axiosInstance = axios.create({
    baseURL: serviceUrl
})


/* Item Detail object to map ML response */
const itemDetails = {
    author: {
        name: String,
        lastname: String 
    },
    item: {
        id: String,   
        title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity: Number,
    description: String
    } 
}

/* Item object to map ML response */

searchResponse = () => {
    return {
        author: {
            name: 'Diego',
            lastname: 'Martinez'
        },
        categories: [],
        items: [] 
    }
}

 searchItem = (item) => {
    return {
        id: item.id, 
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: Number //TB
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
    }
}

itemResponseMapper = (response) => {
  meliItemRes = response.data;
  const items = searchResponse(); 
  meliItemRes.results.forEach(function(item){
    const mappedItem = this.searchItem(item); 
    items.items.push(mappedItem)
   });
   return items
}


router.get('/items', function(req, res) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axiosInstance.get(`search?q=${req.query.q}&limit=4`)
        .then(function(response){
            return res.json(this.itemResponseMapper(response))
        })
        .catch(function(error) {
            console.log(error)
        })
    }
)


router.get('/items/:id', (req, res) => res.json({json:false}))


module.exports = router
