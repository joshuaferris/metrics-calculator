var metricsOutput;
var self;

self.inputEmail = "testemail@seiu.com";
self.inputLocal = "Test Local";
self.inputReportName = "Test Report Name";
self.inputReportType = "Test Report Type";
self.inputDate = "1-1-2001";
self.inputObligationCount = 100000;
self.inputFullDuesCount = 50000;
self.inputPartialDuesCount = 25000;
self.inputMemberCardCount = 60000;
self.inputPoliticalCardCount = 25000;
self.inputPoliticalContributorCount = 20000;
self.inputMailingCount = 45000;
self.inputHomeEmailCount = 15000;
self.inputWorkEmailCount = 5000;
self.inputSmsCount = 10000;
self.inputHomePhoneCount = 30000;
self.inputCellPhoneCount = 15000;

metricsOutput.raw.inputEmail = self.inputEmail;
metricsOutput.raw.inputLocal = self.inputLocal;
metricsOutput.raw.inputReportName = self.inputReportName;
metricsOutput.raw.inputReportType = self.inputReportType;
metricsOutput.raw.inputDate = self.inputDate;
metricsOutput.raw.inputObligationCount = self.inputObligationCount;
metricsOutput.raw.inputFullDuesCount = self.inputFullDuesCount;
metricsOutput.raw.inputPartialDuesCount = self.inputPartialDuesCount;
metricsOutput.raw.inputMemberCardCount = self.inputMemberCardCount;
metricsOutput.raw.inputPoliticalCardCount = self.inputPoliticalCardCount;
metricsOutput.raw.inputPoliticalContributorCount = self.inputPoliticalContributorCount;
metricsOutput.raw.inputMailingCount = self.inputMailingCount;
metricsOutput.raw.inputHomeEmailCount = self.inputHomeEmailCount;
metricsOutput.raw.inputWorkEmailCount = self.inputWorkEmailCount;
metricsOutput.raw.inputSmsCount = self.inputSmsCount;
metricsOutput.raw.inputHomePhoneCount = self.inputHomePhoneCount;
metricsOutput.raw.inputCellPhoneCount = self.inputCellPhoneCount;

// These are pulled directly from the input
metricsOutput.basic.email = self.inputEmail;
metricsOutput.basic.local = self.inputLocal;
metricsOutput.basic.reportName = self.inputReportName;
metricsOutput.basic.reportType = self.inputReportType;
metricsOutput.basic.inputDate = self.inputDate;

// These are calculated values
metricsOutput.member.duesPayersPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputFullDuesCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.member.notPayingDuesCount = self.inputObligationCount - self.inputFullDuesCount - self.inputPartialDuesCount;

metricsOutput.member.cardSignersPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputMemberCardCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.member.cardSignersDuesPayersPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputFullDuesCount / self.inputMemberCardCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copePayersPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputPoliticalContributorCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copeCardSignersPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputPoliticalCardCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.political.copeNotPayingCount = self.inputPoliticalCardCount - self.inputPoliticalContributorCount;

metricsOutput.contact.contactByMailPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputMailingCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByHomeEmailPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputHomeEmailCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByWorkEmailPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputWorkEmailCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactBySMSPercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputSmsCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByHomePhonePercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputHomePhoneCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;

metricsOutput.contact.contactByCellPhonePercentage =
    (self.inputObligationCount !== 0)
        ? ((self.inputCellPhoneCount / self.inputObligationCount) * 100).toFixed(2)
        : 0;
