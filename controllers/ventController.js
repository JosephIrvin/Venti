Vent = require("../models/Vent")
Comment = require("../models/Comment")

const ventController = {
    index: (req, res) => {
        Vent.find({})
            .then((vents) => {
                res.send(vents)
            })
    },
    show: (req, res) => {
        Vent.findById(req.params.ventId).populate('comments')
        .then((vent) => {
            res.send(vent)
        })
    },
    update: (req, res) => {
        Vent.findByIdAndUpdate(req.params.ventId, req.body)
            .then((updatedVent) => {
                updatedVent.save()
                res.send(updatedVent)
            })
    },
    delete: (req, res) => {
        Vent.findByIdAndDelete(req.params.ventId)
        .then(() => {
            res.send(200)
        })
    },
    create: (req, res) => {
        Vent.create(req.body)
        .then((vent) => {
            res.send(vent)
        })
    },

}


module.exports = ventController