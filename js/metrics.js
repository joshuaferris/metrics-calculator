/*  SEIUMETRICS
 *  
 *  Calculates metrics based on data input by the user
 *  
 *  Usage:
 *      var myMetrics = seiuMetrics();
 *      myMetrics.setValues(...);
 *      myMetrics.calculateMetrics();
 *      myMetrics.getMetricsOutput();
 */
var seiuMetrics = (function(){
    var inputEmail;
    var inputLocal;
    var inputReportName;
    var inputReportType;
    var inputDate;
    var inputObligationCount;
    var inputFullDuesCount;
    var inputPartialDuesCount;
    var inputMemberCardCount;
    var inputPoliticalCardCount;
    var inputPoliticalContributorCount;
    var inputMailingCount;
    var inputHomeEmailCount;
    var inputWorkEmailCount;
    var inputSmsCount;
    var inputHomePhoneCount;
    var inputCellPhoneCount;
    
    var self = this;

    var metricsOutput;

    /*
     * Sets values for metrics calculator
     *
     */
    var setValues = function(
            inputEmail,
            inputLocal,
            inputReportName,
            inputReportType,
            inputDate,
            inputObligationCount,
            inputFullDuesCount,
            inputPartialDuesCount,
            inputMemberCardCount,
            inputPoliticalCardCount,
            inputPoliticalContributorCount,
            inputMailingCount,
            inputHomeEmailCount,
            inputWorkEmailCount,
            inputSmsCount,
            inputHomePhoneCount,
            inputCellPhoneCount
        ){
        self.inputEmail = inputEmail;
        self.inputLocal = inputLocal;
        self.inputReportName = inputReportName;
        self.inputReportType = inputReportType;
        self.inputDate = inputDate;
        self.inputObligationCount = inputObligationCount;
        self.inputFullDuesCount = inputFullDuesCount;
        self.inputPartialDuesCount = inputPartialDuesCount;
        self.inputMemberCardCount = inputMemberCardCount;
        self.inputPoliticalCardCount = inputPoliticalCardCount;
        self.inputPoliticalContributorCount = inputPoliticalContributorCount;
        self.inputMailingCount = inputMailingCount;
        self.inputHomeEmailCount = inputHomeEmailCount;
        self.inputWorkEmailCount = inputWorkEmailCount;
        self.inputSmsCount = inputSmsCount;
        self.inputHomePhoneCount = inputHomePhoneCount;
        self.inputCellPhoneCount = inputCellPhoneCount;
    };

    /*
     * Queries the DOM for values of the form inputs and saves them in local variables
     */
    var getInputValues = function(){
        // Grab the values from the form
        self.inputEmail = $("#email").val();
        self.inputLocal = $("#local").val();
        self.inputReportName = $("#report_name").val();
        self.inputReportType = $("#report_type").val();
        self.inputDate = $("#date").val();
        self.inputObligationCount = $("#obligation_count").val();
        self.inputFullDuesCount = $("#full_dues_count").val();
        self.inputPartialDuesCount = $("#partial_dues_count").val();
        self.inputMemberCardCount = $("#member_card_count").val();
        self.inputPoliticalCardCount = $("#political_card_count").val();
        self.inputPoliticalContributorCount = $("#political_contributor_count").val();
        self.inputMailingCount = $("#mailing_count").val();
        self.inputHomeEmailCount = $("#home_email_count").val();
        self.inputWorkEmailCount = $("#work_email_count").val();
        self.inputSmsCount = $("#sms_count").val();
        self.inputHomePhoneCount = $("#home_phone_count").val();
        self.inputCellPhoneCount = $("#cell_phone_count").val();
    };

    /* 
     * Given values from the input objects, calculate the metrics and populate the metricsOutput object
     */
    var calculateMetrics = function(){
        metricsOutput = {
            raw: {},
            basic: {},
            member: {},
            political: {},
            contact: {}
        };

        // Raw Data from the input form
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
                :0;

        metricsOutput.contact.contactByHomeEmailPercentage = 
            (self.inputObligationCount !== 0)
                ? ((self.inputHomeEmailCount / self.inputObligationCount) * 100).toFixed(2)
                :0;

        metricsOutput.contact.contactByWorkEmailPercentage = 
            (self.inputObligationCount !== 0)
                ? ((self.inputWorkEmailCount / self.inputObligationCount) * 100).toFixed(2)
                :0;

        metricsOutput.contact.contactBySMSPercentage= 
            (self.inputObligationCount !== 0)
                ? ((self.inputSmsCount / self.inputObligationCount) * 100).toFixed(2)
                :0;             

        metricsOutput.contact.contactByHomePhonePercentage = 
            (self.inputObligationCount !== 0)
                ? ((self.inputHomePhoneCount / self.inputObligationCount) * 100).toFixed(2)
                :0;

        metricsOutput.contact.contactByCellPhonePercentage = 
            (self.inputObligationCount !== 0)
                ? ((self.inputCellPhoneCount / self.inputObligationCount) * 100).toFixed(2)
                :0;
    };

    /*
     * Returns the metricsOutput object
     */ 
    var getMetricsOutput = function(){
        return metricsOutput;
    };

    return{
        setValues,
        getInputValues,
        calculateMetrics,
        getMetricsOutput,
        self
    }

}($));