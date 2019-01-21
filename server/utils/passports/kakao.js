const kakaoStrategy = require('passport-kakao').Strategy
console.log('오냐?')

module.exports = new kakaoStrategy({
    clientID: '39c5719661d58605ddd042ea324ae12a',
    clientSecret: 'SSMB6FSOHy8Iled06Iat25Gwz4fmb4nD',
    callbackURL: 'api/v1.0/auth/kakao/callback'

}, function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(null, profile);

});