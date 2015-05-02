from flask.ext.wtf import Form
from wtforms.fields import IntegerField,TextField,SelectField
from wtforms.validators import Required, Email

class UnionMetricsForm(Form):
	email = TextField('Email', validators=[Required(), Email()])
	local = SelectField('Local', coerce=int) # Turn this into a dropdown or autocomplete
	report_type = SelectField('ReportType',coerce=int)
	##################################################
	# Add options for report_type here
	# report_type.choices = ....
	##################################################
	report_name = TextField('ReportName')
	as_of_date = TextField('AsOfDate', validators=[Required()]) # Also add custom validator for date format
	obligation_count = IntegerField('ObligationCount', validators=[Required()])
	full_dues_count = IntegerField('FullDuesCount', validators=[Required()])
	partial_dues_count = IntegerField('PartialDuesCount', validators=[Required()])
	member_card_count = IntegerField('MemberCardCount', validators=[Required()])
	political_card_count = IntegerField('PoliticalCardCount')
	political_contributor_count = IntegerField('PoliticalContributorCount')
	mailing_count = IntegerField('MailingCount')
	home_email_count = IntegerField('HomeEmailCount')
	work_email_count = IntegerField('WorkEmailCount')
	sms_count = IntegerField('SMSCount')
	home_phone_count = IntegerField('HomePhoneCount')
	cell_phone_count = IntegerField('CellPhoneCount')
