const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const addProduct = require('./addProduct')
const updateProduct = require('./updateProduct')
const deleteProduct = require('./deleteProduct')

const app = express()

const port = 3001
app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)
app.post('/api/products', addProduct)
app.put('/api/product/:id', updateProduct)
app.delete('api/product/:id', deleteProduct)

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})