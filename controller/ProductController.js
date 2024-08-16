import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { products } from '..model/index.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.fetchProducts(req, res)
})

userRouter.get('/:id', (req, res) => {
    users.fetchProduct(req, res)

})

userRouter.post('./register', (req, res) => {
    users.registerPoduct(req, res)
})

userRouter.patch('/user/:id', (req, res) => {
    users.updateProduct(req, res)
})

userRouter.delete('/user:id',(req, res) => {
    users.deleteProduct(req, res)
})

export {
    express,
    userRouter
}