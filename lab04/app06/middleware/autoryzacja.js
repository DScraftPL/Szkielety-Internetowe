const isAuthorized = (req, res, next) => {
    if (req.query.password == 'secretpasswd') {
        next()
    } else {
        res.status(401).send("Dostep zabroniony")
    }
}

export default isAuthorized