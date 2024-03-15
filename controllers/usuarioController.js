
const formLogin  = (req, res) =>  {
    res.render('auth/login', {})

}

const formRegistration  = (req, res) =>  {
    res.render('auth/registration', {})

}

export {
    formLogin, formRegistration
}