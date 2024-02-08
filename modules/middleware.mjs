

function logRequest(req, res, next) {
    console.log(`Received a ${req.method} request to ${req.path} at ${new Date()}`);
    next();
}

export default logRequest;
