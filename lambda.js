var httpMocks = require('node-mocks-http');

module.exports.processComment = (config) =>
{
    return (event, context, callback) =>
    {
        console.log('The code is running on a AWS Lambda');
        console.log('Loading function');

        console.log('Received event:', JSON.stringify(event, null, 2));

        var request = httpMocks.createRequest(event);
        var response = httpMocks.createResponse();

        require('./controllers/process')(config)(request, response);

        console.log(response);

        if (callback) {
            callback(null, JSON.stringify(response));  // Echo back the first key value
        }
    }
};
