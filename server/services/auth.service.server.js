// Provides Authentication mechanism
// Module Route Root: '/auth'

module.exports = (function() {

    const router = require('express').Router({
        mergeParams: true
    });
    const passport = require('passport');
    const FacebookPassportStrategy = require('passport-facebook').Strategy;
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
                            firstName: profile.name.givenName || profile.displayName,
                            lastName: profile.name.familyName,
                            facebook: {
                                id: profile.id,
                                token: token
                            }
                        };

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
                });
        }
    }

    //#region: Facebook Authentication

    var facebookConfig = {
        clientID: process.env.FACEBOOK_CLIENT_ID || '147411069321322',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '777aa8fe309e17d09643e2f9db740091',
        callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3100/api/auth/facebook/callback'
    };

    passport.use(new FacebookPassportStrategy(facebookConfig, facebookStrategy));



    // route: [GET] '/api/auth/facebook'
    router.get('/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }));

    // route: [GET] '/api/auth/facebook/callback'
    router.get('/facebook/callback', passport.authenticate('facebook', {
        successRedirect: process.env.IS_SERVER ? '/profile' : 'http://localhost:4200/profile',
        failureRedirect: process.env.IS_SERVER ? '/login' : 'http://localhost:4200/login'
    }));

    //#endregion : Facebook Authentication



    return exp;

})();