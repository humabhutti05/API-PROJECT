const app = require('express')
const router = app.Router()
const { Signup , Login ,allUsers, getUserByEmail ,updateUserById} = require('./controller')

router.post('/signup', Signup)
router.post('/login', Login)
router.get('/getallUsers', allUsers)
router.get('/UserByEmail/:email', getUserByEmail)
router.put('/updateUser/:id', updateUserById)





module.exports = router