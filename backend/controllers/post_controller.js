const Post = require('../models/posts');

module.exports.create = (req, res) => {
    Post.create({
        content: req.body.content,
        user: req.body.user_id
    }, function(err, post) {
        if(err) {
            console.log('Some error occurred in creating a post: ', err);
            return;
        } else {
            return res.redirect('back');
        }
    });
}