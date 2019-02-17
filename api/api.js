const express = require('express')
const axios = require('axios')
const router = express.Router()
const serviceUrl = 'https://api.mercadolibre.com/'


var axiosInstance = axios.create({
    baseURL: serviceUrl
})

/* ****************************************************************************** */
/*                               Breadcrumb
/* ****************************************************************************** */

getCategories = (catId) =>  {
    return new Promise(function(resolve, error) {
     axiosInstance.get(`categories/${catId}`)
         .then(function(response){
             resolve(response.data.path_from_root)
         })
         .catch(function(error) {
             console.log(error)
         })    
    }) 
 }

 getFreqCategory = (response) => {
    res = response.data
    var categories = []
    var  count = []
    var category = ''

    res.results.forEach(function(item){
        categories.push(item.category_id)
    });

    categories.forEach(function(i) { 
        count[i] = (count[i]||0) + 1;
    });

    category = Object.keys(count)
    
    return category[0]
 }

/* ****************************************************************************** */
/*                                  SEARCH ITEMS
/* ****************************************************************************** */

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
        free_shipping: item.shipping.free_shipping,
        location: item.address.state_name
    }
}

itemResponseMapper = (response, categories) => {
    meliItemRes = response.data;
    const items = searchResponse(); 
    meliItemRes.results.forEach(function(item){
        const mappedItem = this.searchItem(item); 
        items.items.push(mappedItem)      
   });
   items.categories = categories
   return items
}


router.get('/items', function(req, res) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    axiosInstance.get(`sites/MLA/search?q=${req.query.q}&limit=4`)
        .then(function(response){
            var itemsResponse = response
            var category_id = this.getFreqCategory(itemsResponse) 
            this.getCategories(category_id).then(function(response){
                const categories = response
                res.json(this.itemResponseMapper(itemsResponse, categories))
            })     
        })
        .catch(function(error) {
            console.log(error)
        })
    }
)


/* ****************************************************************************** */
/*                                  SEARCH ITEM DETAIL
/* ****************************************************************************** */

searchDetailsResponse = () => {
    return {
        author: {
            name: 'Diego',
            lastname: 'Martinez'
        },
        categories: [],
        item: {} 
    }
}

itemDetails = (itemRes,descRes) => {
    return {
            id: itemRes.id,   
            title: itemRes.title,
            price: {
                currency: itemRes.currency_id,
                amount: itemRes.price,
                decimals: Number
            },
            picture: itemRes.pictures[0].url,
            condition: itemRes.condition,
            free_shipping: Boolean,
            sold_quantity: itemRes.sold_quantity,
            description: descRes.plain_text
        }
}

itemDetailResponseMapper = (itemRes,descRes,categories) => {
     const itemDetail = searchDetailsResponse(); 
     const mappedItem = itemDetails(itemRes,descRes);
     itemDetail.item = mappedItem
     itemDetail.categories = categories
     return itemDetail
  }

router.get('/items/:id', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    itemDetailPromise = axiosInstance.get(`/items/${req.params.id}`)
    itemDescriptionPromise = axiosInstance.get(`/items/${req.params.id}/description`)

    Promise.all([itemDetailPromise, itemDescriptionPromise])
        .then(function(values) {
            itemRes = values[0].data
            descRes = values[1].data
            this.getCategories(itemRes.category_id).then(function(response){
                const categories = response
                res.json(this.itemDetailResponseMapper(itemRes,descRes,categories))
            })        
        }).catch(function(error) {
            console.log(error)
        })
    }
)

module.exports = router