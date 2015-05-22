var getNextSegmentColor = (function(){
    var colorSet = [
        "#d7191c",
        "#fdae61",
        "#ffffbf",
        "#abdda4",
        "#2b83ba",
        "#999999"
    ];
    var i = 0;
    return function(){
        if(i > (colorSet.length - 1)){i = 0;}
        return colorSet[i++];
    }
})();

var highLightFillColor = "#5c5c5c";

function generateUniverseChartDataSet(metricsObject) {
    dataSet = {
        labels: ["Count"],
        datasets: [
                {
                    data: [metricsObject.raw.inputObligationCount],
                    count: metricsObject.raw.inputObligationCount,
                    fillColor: getNextSegmentColor(),
                    highlightFill: highLightFillColor,
                    label: "Number of members you are obligated to represent"
                },
                {
                    data: [metricsObject.raw.inputFullDuesCount],
                    count: metricsObject.raw.inputFullDuesCount,
                    fillColor: getNextSegmentColor(),
                    highlightFill: highLightFillColor,
                    label: "Number of full dues paying members"
                },
                {
                    data: [metricsObject.raw.inputPartialDuesCount],
                    count: metricsObject.raw.inputPartialDuesCount,
                    fillColor: getNextSegmentColor(),
                    highlightFill: highLightFillColor,
                    label: "Number of partial dues paying members"
                },
                {
                    data: [metricsObject.raw.inputMemberCardCount],
                    count: metricsObject.raw.inputMemberCardCount,
                    fillColor: getNextSegmentColor(),
                    highlightFill: highLightFillColor,
                    label: "Number of membership card signers"
                }, ]
    };
    dataSet.datasets.sort(function(a,b){
        return b.data[0] - a.data[0]
    });
    return dataSet
}

function generateDuesChartDataSet(metricsObject) {
    var unpayingCardSigners = metricsObject.raw.inputPoliticalCardCount - metricsObject.raw.inputPoliticalContributorCount
    unpayingCardSigners = Math.max(unpayingCardSigners, 0)
    dataSet = [
        {
            value: metricsObject.raw.inputFullDuesCount,
            color: getNextSegmentColor(),
            highlight: highLightFillColor,
            label: "Full Dues Paying Members"
        },
        {
            value: metricsObject.raw.inputPartialDuesCount,
            color: getNextSegmentColor(),
            highlight: highLightFillColor,
            label: "Partial Dues Paying Members"
        },
        {
            value: metricsObject.member.notPayingDuesCount - unpayingCardSigners,
            color: getNextSegmentColor(),
            highlight: highLightFillColor,
            label: "Not Paying Dues"
        },
        {
            value: unpayingCardSigners,
            color: getNextSegmentColor(),
            highlight: highLightFillColor,
            label: "Number of membership card signers you are not receiving dues from"
        }
    ];
    dataSet.sort(function(a,b){
        return b.value - a.value
    });    
    return dataSet
}

function generatePoliticalChartDataSet(metricsObject) {
    var unpayingCardSigners = metricsObject.raw.inputPoliticalCardCount - metricsObject.raw.inputPoliticalContributorCount
    unpayingCardSigners = Math.max(unpayingCardSigners, 0)
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputPoliticalContributorCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members who are not contributing to political funds"
                },
                {
                    value: metricsObject.raw.inputPoliticalContributorCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members who contribute to political funds"
                },
                {
                    value: unpayingCardSigners,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members who have committed to contributing political funds, but not receiving payment for."
                }
    ];
    dataSet.sort(function(a,b){
        return b.value - a.value
    });      
    return dataSet
}

function generateContactChartDataSet(metricsObject) {
    dataSet = {
        labels: ["Percent"],
        datasets: [
                {
                    data: [metricsObject.contact.contactByMailPercentage],
                    value: metricsObject.contact.contactByMailPercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with known mailing addresses"
                },
                {
                    data: [metricsObject.contact.contactByHomeEmailPercentage],
                    value: metricsObject.contact.contactByHomeEmailPercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with known home email addresses"
                },
                {
                    data: [metricsObject.contact.contactByWorkEmailPercentage],
                    value: metricsObject.contact.contactByWorkEmailPercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with known work email addresses"
                },
                {
                    data: [metricsObject.contact.contactBySMSPercentage],
                    value: metricsObject.contact.contactBySMSPercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members who have provided SMS authorizations"
                },
                {
                    data: [metricsObject.contact.contactByHomePhonePercentage],
                    value: metricsObject.contact.contactByHomePhonePercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with known home phone numbers"
                },
                {
                    data: [metricsObject.contact.contactByCellPhonePercentage],
                    value: metricsObject.contact.contactByCellPhonePercentage,
                    fillColor: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with known cell phone numbers"
                }, ]
    };
    dataSet.datasets.sort(function(a,b){
        return b.data[0] - a.data[0]
    });    
    return dataSet
}

function generateAddressDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputMailingCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without address information"
                },
                {
                    value: metricsObject.raw.inputMailingCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with address information"
                }
    ];
    dataSet.sort(function(a,b){
        return b.value - a.value
    });     
    return dataSet
}

function generateHomePhoneDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputHomePhoneCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without home phone information"
                },
                {
                    value: metricsObject.raw.inputHomePhoneCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with home phone information"
                }
    ];
    dataSet.sort(function(a,b){
        return b.value - a.value
    });     
    return dataSet
}

function generateCellPhoneDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputCellPhoneCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without cell phone information"
                },
                {
                    value: metricsObject.raw.inputCellPhoneCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with cell phone information"
                }
    ];
    dataSet.sort(function (a, b) {
        return b.value - a.value
    });
    return dataSet
}

function generateSmsDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputSmsCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without SMS authorization"
                },
                {
                    value: metricsObject.raw.inputSmsCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with SMS authorization"
                }
    ];
    dataSet.sort(function (a, b) {
        return b.value - a.value
    });
    return dataSet
}

function generateHomeEmailDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputHomeEmailCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without personal email information"
                },
                {
                    value: metricsObject.raw.inputHomeEmailCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with personal email information"
                }
    ];
    dataSet.sort(function (a, b) {
        return b.value - a.value
    });
    return dataSet
}

function generateWorkEmailDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.raw.inputObligationCount - metricsObject.raw.inputWorkEmailCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members without work email information"
                },
                {
                    value: metricsObject.raw.inputWorkEmailCount,
                    color: getNextSegmentColor(),
                    highlight: highLightFillColor,
                    label: "Members with work email information"
                }
    ];
    dataSet.sort(function (a, b) {
        return b.value - a.value
    });
    return dataSet
}