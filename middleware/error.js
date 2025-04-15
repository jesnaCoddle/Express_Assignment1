const errorHandler = (err, req, res, next) => {
    console.error(err); 
    
    if (err.status) {
        res.status(err.status).json({ error:"An error occurred" });
    }
    else {
        res.status(500).json({ message: 'Internal Server Error' }); 
    }
};

module.exports = errorHandler;