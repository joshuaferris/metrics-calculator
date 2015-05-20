function generateUniverseChartDataSet(metricsObject) {
    dataSet = {
        labels: ["Count"],
        datasets: [
                {
                    data: [metricsObject.raw.inputObligationCount],
                    fillColor: "#F7464A",
                    highlightFill: "#FF5A5E",
                    label: "Number of members you are obligated to represent"
                },
                {
                    data: [metricsObject.raw.inputFullDuesCount],
                    fillColor: "#46BFBD",
                    highlightFill: "#5AD3D1",
                    label: "Number of full dues paying members"
                },
                {
                    data: [metricsObject.raw.inputPartialDuesCount],
                    fillColor: "#FDB45C",
                    highlightFill: "#FFC870",
                    label: "Number of partial dues paying members"
                },
                {
                    data: [metricsObject.raw.inputMemberCardCount],
                    fillColor: "#949FB1",
                    highlightFill: "#A8B3C5",
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
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Full Dues Paying Members"
        },
        {
            value: metricsObject.raw.inputPartialDuesCount,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Partial Dues Paying Members"
        },
        {
            value: metricsObject.member.notPayingDuesCount - unpayingCardSigners,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Not Paying Dues"
        },
        {
            value: unpayingCardSigners,
            color: "#949FB1",
            highlight: "#A8B3C5",
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
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members who are not contributing to political funds"
                },
                {
                    value: metricsObject.raw.inputPoliticalContributorCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members who contribute to political funds"
                },
                {
                    value: unpayingCardSigners,
                    color: "#FDB45C",
                    highlight: "#5AD3D1",
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
                    data: [metricsOutput.contact.contactByMailPercentage],
                    fillColor: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members with known mailing addresses"
                },
                {
                    data: [metricsOutput.contact.contactByHomeEmailPercentage],
                    fillColor: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members with known home email addresses"
                },
                {
                    data: [metricsOutput.contact.contactByWorkEmailPercentage],
                    fillColor: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Members with known work email addresses"
                },
                {
                    data: [metricsOutput.contact.contactBySMSPercentage],
                    fillColor: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Members who have provided SMS authorizations"
                },
                {
                    data: [metricsOutput.contact.contactByHomePhonePercentage],
                    fillColor: "#99583D",
                    highlight: "#A8B3C5",
                    label: "Members with known home phone numbers"
                },
                {
                    data: [metricsOutput.contact.contactByCellPhonePercentage],
                    fillColor: "#54CC14",
                    highlight: "#A8B3C5",
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
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members without address information"
                },
                {
                    value: metricsObject.raw.inputMailingCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
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
                    fillColor: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members without home phone information"
                },
                {
                    value: metricsObject.raw.inputHomePhoneCount,
                    fillColor: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members with home phone information"
                }
    ];
    dataSet.sort(function(a,b){
        return b.value - a.value
    });     
    return dataSet
}