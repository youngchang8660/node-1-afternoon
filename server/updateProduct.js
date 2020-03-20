const products = require('../products.json')

const updateProduct = (req, res) => {
    const {id} = req.params
    let productObj = products.find(element => +id === element.id)
    res.status(200).send(products)
}


module.exports = updateProduct