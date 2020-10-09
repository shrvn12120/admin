module.exports = ( req, res, next) => {
    res.header('content-Range', 'posts 0-20/20')
    next()
}