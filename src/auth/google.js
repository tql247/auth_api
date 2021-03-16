const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use('google',
    new GoogleStrategy(
        {
            clientID: '570748689448-us112vadq54ouu9o56gc5rm9f430vort.apps.googleusercontent.com',
            clientSecret: 'zR_CoI_3wV6iD-vZe3SOXTDK',
            callbackURL: '/login/auth/google/callback'
        },
        accessToken => {
            console.log('accessToken');
            console.log(accessToken);
        }
    ),
);

module.exports = passport

