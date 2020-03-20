const products = require('../products.json')

const addProduct = (req, res) => {
    products.push(req.body)
    res.status(200).send(products)
}


module.exports = addProduct