const loggerMiddleware = (req, res, next) => {
    console.log(`${req.protocol} ${req.method} ${req.url}`);
    next();
};

module.exports= loggerMiddleware;
