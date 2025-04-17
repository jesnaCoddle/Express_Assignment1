//global error handler
const errorHandler = (err, req, res, next) => {
    console.error(err); 
    
    if (err.status) {
        res.json({ error:"An error occurred" });
    }
    else {
        res.json({ message: 'Internal Server Error' }); 
    }
};

module.exports = errorHandler;


  