const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
    'facebook',
    new FacebookStrategy(
        {
            clientID: "2919451708338120",
            clientSecret: "5c8a12d77f56afe6cbe2895e2cb726c3",
            callbackURL: "/login/facebook/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            //    do something
            done(null)
        }
    )
);

module.exports = passport

