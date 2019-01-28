const express = require('express')
const router = express.Router()
const ventController = require('../controllers/ventController')


router.get('/api/vents', ventController.index)
router.post('/api/vents/', ventController.create)
router.get('/api/vents/:ventId', ventController.show)
router.patch('/api/vents/:ventId', ventController.update)
router.delete('/api/vents/:ventId', ventController.delete)

router.get('/api/vents/:ventId/comments', ideasController.index)
router.get('/api/comments/:commentId', ideasController.show)
router.delete('/api/comments/:commentId', ideasController.delete)
router.patch('/api/comments/:commentId', ideasController.update)
router.post('/api/vents/:ventId/comments', ideasController.create)

module.exports = router
