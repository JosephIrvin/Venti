const express = require('express')
const router = express.Router()
const ventController = require('../controllers/ventController')
const commentController = require('../controllers/commentController')


router.get('/vents', ventController.index)
router.post('/vents', ventController.create)
router.get('/vents/:ventId', ventController.show)
router.patch('/vents/:ventId', ventController.update)
router.delete('/vents/:ventId', ventController.delete)

router.get('/vents/:ventId/comments', commentController.index)
router.get('/comments/:commentId', commentController.show)
router.delete('/comments/:commentId', commentController.delete)
router.patch('/comments/:commentId', commentController.update)
router.post('/vents/:ventId/comments', commentController.create)

module.exports = router
