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

/* 
 * Metodo generico para la busqueda del path_from_route para categoria de item o listado 
*/
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

/* 
 * getFreqCategory recibe los 4 resultados y utiliza las categorias para armar un array sobre
 * el cual contabilizar el que mayor ocurrencias tiene y ser este el ID utilizado para determinar
 * el breadcrubm de un listado
*/
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

/**
 * Objeto principal de intercambio con la vista
 */
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

/**
 * Objeto item a inyectar en el array items en el objeto principal
 */
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

/**
 * Mapeo de datos devuelvos por servicio de ML
 */
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
    //Se agrega permisos de CORS para convivencia de servidor react/node
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

/**
 * Objeto principal de detalle para intercambio con la vista
 */
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

/**
 * Objeto item a inyectar en el array items en el objeto principal
 */
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

/**
 * Mapeo de datos devuelvos por servicio de ML
 */
itemDetailResponseMapper = (itemRes,descRes,categories) => {
     const itemDetail = searchDetailsResponse(); 
     const mappedItem = itemDetails(itemRes,descRes);
     itemDetail.item = mappedItem
     itemDetail.categories = categories
     return itemDetail
  }

router.get('/items/:id', function(req, res) {
    //Se agrega permisos de CORS para convivencia de servidor react/node
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    itemDetailPromise = axiosInstance.get(`/items/${req.params.id}`)
    itemDescriptionPromise = axiosInstance.get(`/items/${req.params.id}/description`)

    //dado los N llamados asincronos, se utiliza promise all
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