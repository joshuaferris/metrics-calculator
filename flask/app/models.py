from app import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	email = db.Column(db.String(60), index=True,unique=True)
	local_name = db.Column(db.String(120))

	def __repr__(self):
		return '<User %t>' % (self.email)

class ReportType(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(120), primary_key=True, unique=True)

class ReportDetails(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	report_type_id = db.Column(db.Integer, db.ForeignKey('report_type.id'))
	timestamp = db.Column(db.DateTime)
	as_of_date = db.Column(db.DateTime)
	obligation_count = db.Column(db.Integer) # Universe
	full_dues_count = db.Column(db.Integer) # Full dues payers
	partial_dues_count = db.Column(db.Integer) # Partial dues payers
	member_card_count = db.Column(db.Integer) # Member card signers
	political_contributor_count = db.Column(db.Integer) # everyone paying political contributions
	political_card_count = db.Column(db.Integer) # everyone who signed a political card
	mailing_count = db.Column(db.Integer) # Count of mailing addresses
	work_email_count = db.Column(db.Integer) # count of work email
	home_email_count = db.Column(db.Integer) # count of home email
	sms_count = db.Column(db.Integer) # count of text authorizations
	home_phone_count = db.Column(db.Integer) # count of home phone numbers
	cell_phone_count = db.Column(db.Integer) # count of cell phone numbers