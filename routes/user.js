// Reserved for JWT user log in routes

const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    // to create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})