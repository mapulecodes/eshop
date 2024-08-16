import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { products } from '..model/index.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.get('/', verifyAToken, (req, res) => {
    products.fetchProducts(req, res)
})
productRouter.get('/recent', verifyAToken, (req, res) => {
    products.recentProducts(req, res)
})
productRouter.get('/:id', verifyAToken, (req, res) => {
    products.fetchProduct(req, res)
})
productRouter.post('/add', verifyAToken, (req, res) => {
    products.addproduct(req, res)
})
productRouter.patch('/update', verifyAToken, (req, res) => {
    products.updateProduct(req, res)
})
productRouter.delete('/delete', verifyAToken, (req, res) => {
    products.deleteProduct(req, res)
})



export {
    express,
    productRouter
}