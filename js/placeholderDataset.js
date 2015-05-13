var metricsOutput = new Object();
var self = new Object();

metricsOutput.inputEmail = "testemail@seiu.com";
metricsOutput.inputLocal = "Test Local";
metricsOutput.inputReportName = "Test Report Name";
metricsOutput.inputReportType = "Test Report Type";
metricsOutput.inputDate = "1-1-2001";
metricsOutput.inputObligationCount = 100000;
metricsOutput.inputFullDuesCount = 50000;
metricsOutput.inputPartialDuesCount = 25000;
metricsOutput.inputMemberCardCount = 60000;
metricsOutput.inputPoliticalCardCount = 25000;
metricsOutput.inputPoliticalContributorCount = 20000;
metricsOutput.inputMailingCount = 45000;
metricsOutput.inputHomeEmailCount = 15000;
metricsOutput.inputWorkEmailCount = 5000;
metricsOutput.inputSmsCount = 10000;
metricsOutput.inputHomePhoneCount = 30000;
metricsOutput.inputCellPhoneCount = 15000;

metricsOutput.raw = new Object();

metricsOutput.raw.inputEmail = metricsOutput.inputEmail;
metricsOutput.raw.inputLocal = metricsOutput.inputLocal;
metricsOutput.raw.inputReportName = metricsOutput.inputReportName;
metricsOutput.raw.inputReportType = metricsOutput.inputReportType;
metricsOutput.raw.inputDate = metricsOutput.inputDate;
metricsOutput.raw.inputObligationCount = metricsOutput.inputObligationCount;
metricsOutput.raw.inputFullDuesCount = metricsOutput.inputFullDuesCount;
metricsOutput.raw.inputPartialDuesCount = metricsOutput.inputPartialDuesCount;
metricsOutput.raw.inputMemberCardCount = metricsOutput.inputMemberCardCount;
metricsOutput.raw.inputPoliticalCardCount = metricsOutput.inputPoliticalCardCount;
metricsOutput.raw.inputPoliticalContributorCount = metricsOutput.inputPoliticalContributorCount;
metricsOutput.raw.inputMailingCount = metricsOutput.inputMailingCount;
metricsOutput.raw.inputHomeEmailCount = metricsOutput.inputHomeEmailCount;
metricsOutput.raw.inputWorkEmailCount = metricsOutput.inputWorkEmailCount;
metricsOutput.raw.inputSmsCount = metricsOutput.inputSmsCount;
metricsOutput.raw.inputHomePhoneCount = metricsOutput.inputHomePhoneCount;
metricsOutput.raw.inputCellPhoneCount = metricsOutput.inputCellPhoneCount;

metricsOutput.basic = new Object();

// These are pulled directly from the input
metricsOutput.basic.email = metricsOutput.inputEmail;
metricsOutput.basic.local = metricsOutput.inputLocal;
metricsOutput.basic.reportName = metricsOutput.inputReportName;
metricsOutput.basic.reportType = metricsOutput.inputReportType;
metricsOutput.basic.inputDate = metricsOutput.inputDate;


metricsOutput.member = new Object();
metricsOutput.political = new Object();
metricsOutput.contact = new Object();

// These are calculated values
metricsOutput.member.duesPayersPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputFullDuesCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.member.notPayingDuesCount = metricsOutput.inputObligationCount - metricsOutput.inputFullDuesCount - metricsOutput.inputPartialDuesCount;

metricsOutput.member.cardSignersPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputMemberCardCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.member.cardSignersDuesPayersPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputFullDuesCount / metricsOutput.inputMemberCardCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copePayersPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputPoliticalContributorCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copeCardSignersPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputPoliticalCardCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copeNotPayingCount = metricsOutput.inputPoliticalCardCount - metricsOutput.inputPoliticalContributorCount;

metricsOutput.contact.contactByMailPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputMailingCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByHomeEmailPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputHomeEmailCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByWorkEmailPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputWorkEmailCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactBySMSPercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputSmsCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByHomePhonePercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputHomePhoneCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByCellPhonePercentage =
    (metricsOutput.inputObligationCount !== 0)
        ? ((metricsOutput.inputCellPhoneCount / metricsOutput.inputObligationCount) * 100).toFixed(2)
        : 0;
