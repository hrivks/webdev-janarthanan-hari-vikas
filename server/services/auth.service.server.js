// provides authentication services

module.exports = (function() {
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const UserService = require('./user.service.server');

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    passport.use(new LocalStrategy(localStrategy));

    /** Local Strategy for authenticating user
     * @param {string} username username
     * @param {string} password password
     * @param {function} done callback function to invoke upon authentication
     */
    function localStrategy(username, password, done) {
        UserService.api.findUserByCredentials(username, password)
            .then((user) => {

                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }

            }, (err) => {

                done(err, null);

            });
    }

    /** User serializer function for passport js */
    function serializeUser(user, done) {
        done(null, user);
    }

    /** User deserializer function for passport js */
    function deserializeUser(user, done) {
        UserService.api.findUserById(user._id)
            .then(
                (user) => {
                    if (user) {
                        done(null, user);
                    } else {
                        done('No such user exists', null);
                    }
                },
                (err) => {
                    done(err, null);
                }
            );
    }

})();