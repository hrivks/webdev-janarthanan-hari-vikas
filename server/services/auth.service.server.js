// Provides Authentication mechanism
// Module Route Root: '/auth'

module.exports = (function () {

    const router = require('express').Router({ mergeParams: true });
    const passport = require('passport');
    const facebookPassportStrategy = require('passport-facebook').Strategy;
    const Utils = require('./service-utils.js');
    const UserModel = require('../models/user/user.model.server.js');


    /** Exported object */
    const exp = {
        router: router, // router object
    };

    function facebookStrategy(token, refreshToken, profile, done) {
        if (!profile) {
            done(null, false);
        } else {
            // get user by facebook id
            UserModel.findUserByFacebookId(profile.id)
                .then((user) => {
                    if (user) {
                        done(null, user);
                    } else {
                        // user does not exist. create user

                        const newFBUser = {
                            firstName: '', // todo: get name
                            lastName: '',
                            email: '',
                            facebook: {
                                id: profile.id,
                                token: token
                            }
                        }

                        UserModel.create(newFBUser, (err, createdUser) => {
                            if (err) {
                                done(err, null);
                            } else {
                                done(null, createdUser);
                            }
                        });
                    }
                }, (err) => {
                    done(err, null);
                })
        }
    }

    //#region: Facebook Authentication

    var facebookConfig = {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL
    };

    passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));



    // route: [GET] '/auth/facebook'
    router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

    router.get('/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/login'
    }));

    //#endregion : Facebook Authentication



    return exp;

})();