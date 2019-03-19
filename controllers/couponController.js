Coupon = require("../models/Coupon")

const couponController = {
    index: (req, res) => {
        Coupon.find({})
            .then((coupons) => {
                res.send(coupons)
            })
    },
    show: (req, res) => {
        Coupon.findById(req.params.couponId)
        .then((coupon) => {
            res.send(coupon)
        })
    },
    update: (req, res) => {
        Coupon.findByIdAndUpdate(req.params.couponId, req.body)
            .then((updatedCoupon) => {
                updatedCoupon.save()
                res.send(updatedCoupon)
            })
    },
    delete: (req, res) => {
        Coupon.findByIdAndDelete(req.params.couponId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Coupon.create(req.body)
        .then((coupon) => {
            res.send(coupon)
        })
    },

}


module.exports = couponController