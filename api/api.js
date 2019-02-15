const express = require('express')
const axios = require('axios')
const router = express.Router()
const serviceUrl = 'https://api.mercadolibre.com/sites/MLA/'

// 'https://api.mercadolibre.com/items/​:id'             //datos en general
// 'https://api.mercadolibre.com/items/​:id​/description' // solo retorna la descripcion



var axiosInstance = axios.create({
    baseURL: serviceUrl
})

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

/* ****************************************************************************** */
/*                                  ITEM DETAILS
/* ****************************************************************************** */

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


/* ****************************************************************************** */
/*                                  ITEM DETAILS
/* ****************************************************************************** */

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

itemResponseMapper = (response) => {
    meliItemRes = response.data;
    const items = searchResponse(); 
    meliItemRes.results.forEach(function(item){
      const mappedItem = this.searchItem(item); 
      items.items.push(mappedItem)
     });
     return items
  }

router.get('/items:id', function(req, res) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axiosInstance.get(`search?q=${req.query.id}`)
        .then(function(response){
            return res.json(this.itemDetailResponseMapper(response))
        })
        .catch(function(error) {
            console.log(error)
        })
    }
)


module.exports = router
