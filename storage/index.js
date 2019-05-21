var AWS = require('aws-sdk');
var bucketName = 'cw.metrics';

exports.saveData = function (filename, data) {
    var s3 = new AWS.S3();
    var params = {
        Bucket: bucketName,
        Key: filename,
        Body: JSON.stringify(data),
        ContentType: "application/json"
    };
    s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
};