const express = require('express')
const ControlleRouter = require('../controller/ControlleRoutes')

const router= express.Router()


router.get('/', ControlleRouter.index)
router.post('/users', ControlleRouter.user)
router.put('/users/:id', ControlleRouter.atulizar)
router.delete('/users/:id', ControlleRouter.deleta)


module.exports = router