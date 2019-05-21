var AWS = require('aws-sdk');
var storageS3 = require('../storage');
var helper = require('../helpers');

function CW(region) {
    this.region = region;
}


CW.prototype.getMetricsData = function (params) {
    var cloudWatch = new AWS.CloudWatch({apiVersion: '2010-08-01', region: this.region});
    cloudWatch.getMetricData(params, function (err, data) {
        console.log('Entry to getMetricData');
        if (err) {
            throw new Error(err, err.stack);
        }
        console.log(data);
        var filename = helper.shortDate(new Date()) + "_metrics.json";
        storageS3.saveData(filename, data);
    });
};

module.exports = CW;