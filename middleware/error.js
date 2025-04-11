const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({ err:"error"})
    }
    else {
        res.status(500).json({ msg: 'Error' });
    }

};

module.exports = errorHandler;

