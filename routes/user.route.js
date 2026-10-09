import express from 'express'
import { createUser } from '../services/user.service.js'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    return res.json({
        message:  "rota de lista de usuario"
    })
})

userRouter.post('/', async (req, res) => {
    const payload = req.body;

    const user = await createUser(payload);

    return res.json(user)
})
