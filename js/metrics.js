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

	var metricsOutput;

	var self = this;

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

	var calculateMetrics = function(){
		var metricsOutput = {
			basic: {},
			member: {},
			political: {},
			contact: {}
		};

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
		console.log(metricsOutput);
	};

	var getMetricsOutput = function(){
		return metricsOutput;
	};

	return{
		getInputValues,
		calculateMetrics,
		getMetricsOutput,
		self
	}

}($));