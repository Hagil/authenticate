function instagram_routes(app, passport){
    
        // send to instagram to do the authentication
        app.get('/connect/instagram', passport.authorize('instagram', {
            scope: ['profile', 'email']
        }));
    
        // handle the callback after instagram has authorized the user
        app.get('/connect/instagram/callback',
            passport.authorize('instagram', {
                successRedirect: '/profile',
                failureRedirect: '/'
            }));
        }
        module.exports = instagram_routes;