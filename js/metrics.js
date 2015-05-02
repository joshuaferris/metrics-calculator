var seiuMetrics = (function(){

	var inputEmail;
	var inputLocal;
	var inputReportName;
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

	var getInputValues = function(){
		// Grab the values from the form
		this.inputEmail = $("#email").val();
		this.inputLocal = $("#local").val();
		this.inputReportName = $("#report_name").val();
		this.inputDate = $("#date").val();
		this.inputObligationCount = $("#obligation_count").val();
		this.inputFullDuesCount = $("#full_dues_count").val();
		this.inputPartialDuesCount = $("#partial_dues_count").val();
		this.inputMemberCardCount = $("#member_card_count").val();
		this.inputPoliticalCardCount = $("#political_card_count").val();
		this.inputPoliticalContributorCount = $("#political_contributor_count").val();
		this.inputMailingCount = $("#mailing_count").val();
		this.inputHomeEmailCount = $("#home_email_count").val();
		this.inputWorkEmailCount = $("#work_email_count").val();
		this.inputSmsCount = $("#sms_count").val();
		this.inputHomePhoneCount = $("#home_phone_count").val();
		this.inputCellPhoneCount = $("#cell_phone_count").val();

		console.log(this.inputEmail);

	};

	var calculateMetrics = function(){

	}

	return{
		getInputValues,
		calculateMetrics
	}

}($));