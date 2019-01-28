const express = require('express')
const router = express.Router()
const ventController = require('../controllers/ventController')
const commentController = require('../controllers/commentController')


router.get('/api/vents', ventController.index)
router.post('/api/vents', ventController.create)
router.get('/api/vents/:ventId', ventController.show)
router.patch('/api/vents/:ventId', ventController.update)
router.delete('/api/vents/:ventId', ventController.delete)

router.get('/api/vents/:ventId/comments', commentController.index)
router.get('/api/comments/:commentId', commentController.show)
router.delete('/api/comments/:commentId', commentController.delete)
router.patch('/api/comments/:commentId', commentController.update)
router.post('/api/vents/:ventId/comments', commentController.create)

module.exports = router
