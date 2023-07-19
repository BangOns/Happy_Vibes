const express = require('express');
const {sessionUser} = require('../middleware/session.js')
const { getUsers, createUser, updateUser, verifyUser, resendCode, getEmail, changePassword, deleteUser, getRandomUsers, getUserById } = require('../Controller/user.controller.js');

const router = express.Router();

router.get('/users', sessionUser, getUsers);
router.get('/users/:id', sessionUser, getUserById)
router.get('/users/random', sessionUser, getRandomUsers);
router.post('/user/create', createUser);
router.patch('/forgot-pass/get_email', getEmail)
router.patch('/update-pass/:userId/:token', changePassword)
router.patch('/user/verify', verifyUser);
router.patch('/user/resend/otp', resendCode);
router.patch('/user/edit', sessionUser, updateUser);
router.delete('/delete/user', sessionUser, deleteUser);

module.exports = router;