const Vent = require('../models/Vent')
const Comment = require('../models/Comment')

const commentController = {
    index: (req, res) => {
        var ventId = req.params.ventId
        Vent.findById(ventId).populate('comments')
            .then((vent) => {
                res.send(vent.comments)
            })
    },
    show: (req, res) => {
        var commentId = req.params.commentId
        Comment.findById(commentId)
            .then((comment) => {
                res.send(comment)
            })
    },
    delete: (req, res) => {
        var commentId = req.params.commentId
        Comment.findByIdAndDelete(commentId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var commentId = req.params.commentId
        Comment.findByIdAndUpdate(commentId, req.body, { new: true })
            .then((updatedComment) => {
                updatedComment.save()
                res.send(updatedComment)
            })
    },
    create: (req, res) => {
        var ventId = req.params.ventId
        Vent.findById(ventId)
            .then((vent) => {
                console.log(vent)
                Comment.create(req.body)
                    .then((newComment) => {
                        console.log(newComment)
                        vent.comments.push(newComment)
                        vent.save()
                        res.send(newComment)
                    })
            })
    }

}

module.exports = commentController