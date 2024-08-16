import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
const productRouter = express.Router()
productRouter.use(bodyParser.json())
productRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})
productRouter.get('/:id', (req, res) => {
    users.fetchUser(req, res)
})
productRouter.post('./register', (req, res) => {
    users.registerUser(req, res)
})
productRouter.patch('/user/:id', (req, res) => {
    users.updateUser(req, res)
})
productRouter.delete('/user:id',(req, res) => {
    users.deleteUser(req, res)
})
productRouter.post('login',(req, res)=> {
    users.login(req, res)
})

export {
    productRouter
}