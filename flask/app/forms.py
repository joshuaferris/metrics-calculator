from flask.ext.wtf import Form
from wtforms import DateField,IntegerField,StringField,SelectField
from wtforms.validators import DataRequired, Email, Length, NumberRange, Optional

class UnionMetricsForm(Form):
	email = StringField('Email', validators=[DataRequired('You must enter an email address.'), Email(),Length(max=60)])
	local = StringField('Local', validators=[DataRequired('You must enter a local'), Length(max=120)]) # Turn this into a dropdown or autocomplete
	report_type = SelectField('ReportType',coerce=int)
	report_name = StringField('ReportName')
	as_of_date = DateField('AsOfDate', validators=[DataRequired('You must enter a valid date')],format='%m/%d/%Y') # Also add custom validator for date format
	obligation_count = IntegerField('ObligationCount', validators=[NumberRange(min=0),DataRequired()])
	full_dues_count = IntegerField('FullDuesCount', validators=[NumberRange(min=0),DataRequired()])
	partial_dues_count = IntegerField('PartialDuesCount', validators=[NumberRange(min=0),DataRequired()])
	member_card_count = IntegerField('MemberCardCount', validators=[NumberRange(min=0),DataRequired()])
	political_card_count = IntegerField('PoliticalCardCount', validators=[NumberRange(min=0),DataRequired()])
	political_contributor_count = IntegerField('PoliticalContributorCount', validators=[NumberRange(min=0),DataRequired()])
	mailing_count = IntegerField('MailingCount', validators=[Optional(),NumberRange(min=0)])
	home_email_count = IntegerField('HomeEmailCount', validators=[Optional(),NumberRange(min=0)])
	work_email_count = IntegerField('WorkEmailCount', validators=[Optional(),NumberRange(min=0)])
	sms_count = IntegerField('SMSCount', validators=[Optional(),NumberRange(min=0)])
	home_phone_count = IntegerField('HomePhoneCount', validators=[Optional(),NumberRange(min=0)])
	cell_phone_count = IntegerField('CellPhoneCount', validators=[Optional(),NumberRange(min=0)])
