var CW = require('./cw');
var regionAws = 'eu-west-1';

var paramsCWMetricsData = {
    StartTime: 1556713050, /*Wednesday, May 1, 2019 3:17:30 PM GMT+03:00 required */
    EndTime: 1556885850, /* Friday, May 3, 2019 3:17:30 PM GMT+03:00 required */
    MetricDataQueries: [/* required */
        {
            Id: 'm1test', /* required */
            MetricStat: {
                Metric: {
                    /* required */
                    Dimensions: [
                        {
                            Name: 'ImageId', /* required */
                            Value: 'ami-07683a44e80cd32c5' /* required */
                        },
                        /* more items */
                    ],
                    MetricName: 'CPUUtilization',
                    Namespace: 'AWS/EC2'
                },
                Period: 300, /* required */
                Stat: 'Average', /* required */
                Unit: 'Percent'
            },
            //   ReturnData: true
        },
        /* more items */
    ]

//   MaxDatapoints: 'NUMBER_VALUE',
//   NextToken: 'STRING_VALUE',
//   ScanBy: TimestampDescending | TimestampAscending
};

function run() {
    var cw = new CW(regionAws);
    cw.getMetricsData(paramsCWMetricsData);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}