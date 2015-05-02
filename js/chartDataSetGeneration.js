function generateUniverseChartDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.inputObligationCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Number of members you are obligated to represent"
                },
                {
                    value: metricsObject.inputFullDuesCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Number of full dues paying members"
                },
                {
                    value: metricsObject.inputPartialDuesCount,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Number of partial dues paying members"
                },
                {
                    value: metricsObject.inputMemberCardCount,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Number of membership card signers"
                },
    ];
    return dataSet
}

function generateDuesChartDataSet(metricsObject) {
    var unpayingCardSigners = metricsObject.inputPoliticalCardCount - metricsObject.inputPoliticalContributorCount
    unpayingCardSigners = Math.max(unpayingCardSigners, 0)
    dataSet = [
                {
                    value: metricsObject.inputFullDuesCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Full Dues Paying Members"
                },
                {
                    value: metricsObject.inputPartialDuesCount,
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
                },
    ];
    return dataSet
}

function generatePoliticalChartDataSet(metricsObject) {
    var unpayingCardSigners = metricsObject.inputPoliticalCardCount - metricsObject.inputPoliticalContributorCount
    unpayingCardSigners = Math.max(unpayingCardSigners, 0)
    dataSet = [
                {
                    value: metricsObject.inputObligationCount - metricsObject.inputPoliticalContributorCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members who are not contributing to political funds"
                },
                {
                    value: metricsObject.inputPoliticalContributorCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members who contribute to political funds"
                },
                {
                    value: unpayingCardSigners,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members who have committed to contributing political funds, but not receiving payment for."
                }
    ];
    return dataSet
}

function generateContactChartDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsOutput.contact.contactByMailPercentaget,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members with known mailing addresses"
                },
                {
                    value: metricsOutput.contact.contactByHomeEmailPercentage,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members with known home email addresses"
                },
                {
                    value: metricsOutput.contact.contactByWorkEmailPercentage,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Members with known work email addresses"
                },
                {
                    value: metricsOutput.contact.contactBySMSPercentage,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Members who have provided SMS authorizations"
                },
                {
                    value: metricsOutput.contact.contactByHomePhonePercentage,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Members with known home phone numbers"
                },
                {
                    value: metricsOutput.contact.contactByCellPhonePercentage,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Members with known cell phone numbers"
                },
    ];
    return dataSet
}

function generateAddressDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.inputObligationCount - metricsObject.inputMailingCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members without address information"
                },
                {
                    value: metricsObject.inputMailingCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members with address information"
                }
    ];
    return dataSet
}

function generateHomePhoneDataSet(metricsObject) {
    dataSet = [
                {
                    value: metricsObject.inputObligationCount - metricsObject.inputHomePhoneCount,
                    color: "#F7464A",
                    highlight: "#FF5A5E",
                    label: "Members without home phone information"
                },
                {
                    value: metricsObject.inputHomePhoneCount,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Members with home phone information"
                }
    ];
    return dataSet
}