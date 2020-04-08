
function create(app,Handlebars,config) {
    Handlebars.registerHelper('appname',
        () => {
            return config.appname
        }
    )
    Handlebars.registerHelper('hostname',
        () => {
            return config.hostname
        }
    )
    Handlebars.registerHelper('env',
        () => {
            return config.env
        }
    )
    Handlebars.registerHelper('getCurrentYear',
        () => {
            return new Date().getFullYear()
        }
    )
    Handlebars.registerHelper('screamIt', 
        (text) => {
            return text.toUpperCase()
        }
    )
    Handlebars.registerHelper('loginLogoutHtml',
        () => {
            if(app.locals.authenticated == true) {
                let username = app.locals.username
                loginLogoutText = '<a href="/logout" class="icon-user">Logout ('+username+')</a>'
            }else{
                loginLogoutText = '<a href="/secured" class="icon-user">Login</a>'
            }
            return new Handlebars.SafeString(loginLogoutText)
        }
    )

}


module.exports = {
    create
}