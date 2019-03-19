const express = require('express')
const router = express.Router()
const ventController = require('../controllers/ventController')
const commentController = require('../controllers/commentController')
const couponController = require('../controllers/couponController')


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

router.get('/coupons', couponController.index)
router.post('/coupons', couponController.create)
router.get('/coupons/:couponId', couponController.show)
router.patch('/coupons/:couponId', couponController.update)
router.delete('/coupons/:couponId', couponController.delete)


module.exports = router
