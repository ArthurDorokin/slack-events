const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router();
const controller = require ('../controllers/auth');

router.get('/api/auth', controller.login);
