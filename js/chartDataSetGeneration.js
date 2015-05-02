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
                    value: metricsObject.member.notPayingDuesCount,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Not Paying Dues"
                }
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
                },
    ];
    return dataSet
}