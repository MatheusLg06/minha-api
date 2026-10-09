import express from 'express'
import { createUser, listUsers } from '../services/user.service.js'

export const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await listUsers()
        return res.json(users)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })   
    }
})

userRouter.post('/', async (req, res) => {
    try {
        const payload = req.body;
    
        const user = await createUser(payload);
    
        return res.json(user)
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
})
