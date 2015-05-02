from flask.ext.wtf import Form
from wtforms import DateField,IntegerField,StringField,SelectField
from wtforms.validators import DataRequired, Email, Length

class UnionMetricsForm(Form):
	email = StringField('Email', validators=[DataRequired(), Email(),Length(max=60)])
	local = StringField('Local', validators=[Length(max=120)]) # Turn this into a dropdown or autocomplete
	report_type = SelectField('ReportType',coerce=int)
	report_name = StringField('ReportName')
	as_of_date = DateField('AsOfDate', validators=[DataRequired()],format='%m/%d/%Y') # Also add custom validator for date format
	obligation_count = IntegerField('ObligationCount', validators=[DataRequired()])
	full_dues_count = IntegerField('FullDuesCount', validators=[DataRequired()])
	partial_dues_count = IntegerField('PartialDuesCount', validators=[DataRequired()])
	member_card_count = IntegerField('MemberCardCount', validators=[DataRequired()])
	political_card_count = IntegerField('PoliticalCardCount')
	political_contributor_count = IntegerField('PoliticalContributorCount')
	mailing_count = IntegerField('MailingCount')
	home_email_count = IntegerField('HomeEmailCount')
	work_email_count = IntegerField('WorkEmailCount')
	sms_count = IntegerField('SMSCount')
	home_phone_count = IntegerField('HomePhoneCount')
	cell_phone_count = IntegerField('CellPhoneCount')
