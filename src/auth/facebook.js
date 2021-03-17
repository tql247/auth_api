const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
    'facebook',
    new FacebookStrategy(
        {
            clientID: "161294699153731",
            clientSecret: "1aae6feaac481109dcf9d81756cdf572",
            callbackURL: "/login/facebook/callback"
        },
        (accessToken, refreshToken, profile, cb) => {
            console.log('accessToken')
            console.log('refreshToken')
            console.log('profile')
            console.log('cb')
        }
    )
);

module.exports = passport

