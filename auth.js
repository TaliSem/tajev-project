const GoogleStrategy = require('passport-google-oauth')
    .OAuth2Strategy;

module.exports = function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: "1030241436329-8deqkv0n6jo9g98ck7cmh6gpebvtdadk.apps.googleusercontent.com",
        clientSecret: "In0W_vXUNLgbxtbLniUN0UwB",
        callbackURL: 'http://localhost:3000/api/auth/google/callback'
    }, (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));
};