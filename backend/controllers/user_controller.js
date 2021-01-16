const User = require('../models/user');

module.exports.signUp = (req, res) => {
    return res.render('sign-up');
}

module.exports.signIn = (req, res) => {
    return res.render('sign-in');
}

module.exports.create = (req, res) => {
    if(req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            console.log('Some error occurred!');
            return;
        }
        if(!user) {
            User.create(req.body, (err, user) => {
                if(err) {
                    console.log('Error occurred in creating a user');
                    return;
                }
                return res.redirect('/user/sign-in');
            })
        } else {
            return res.redirect('back');
        }
    });
}

module.exports.createSession = (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) {
            console.log('Some error occurred!');
            return;
        }

        if(user) {
            if(user.password != req.body.password) {
                return res.redirect('back');
            }
            res.cookie('user_id', user.id);
            return res.redirect('/user/dashboard');
        } else {
            return res.redirect('back');
        }
    });
}

module.exports.profile = (req, res) => {
    if(req.cookies.user_id) {
        User.findById(req.cookies.user_id, (err, user) => {
            if(user) {
                return res.render('dashboard', {
                    user: user
                });
            }
            
            return res.redirect('/user/sign-in');
        });
    } else {
        return res.redirect('/user/sign-in');
    }
}