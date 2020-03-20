const products = require('../products.json')

const deleteProduct = (req, res) => {
    let index = cars.findIndex(element => +req.params.id === element.id);
    products.splice(index, 1)
    res.status(200).send(products)
}

module.exports = deleteProduct