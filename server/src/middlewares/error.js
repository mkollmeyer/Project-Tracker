const errorHandle = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        staus: 500,
        message: "There is an error",
        error: err.message
    });
};

export default errorHandle