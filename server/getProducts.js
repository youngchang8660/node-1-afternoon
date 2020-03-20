const products = require('../products.json')

const getProducts = (req, res) => {
    const filterPrice = products.filter(val => val.price >= parseInt(req.query.price))
    if(req.query.price) {
        return res.status(200).send(filterPrice)
    }
    res.status(200).send(products)
}

module.exports = getProducts