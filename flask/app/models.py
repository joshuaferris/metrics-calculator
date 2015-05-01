from app import db

class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	email = db.Column(db.String(60), index=True,unique=True)
	
	def __repr__(self):
		return '<User %t>' % (self.email)

class ReportType(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(120), primary_key=True, unique=True)

class ReportDetails(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
	report_type_id = db.Column(db.Integer, db.ForeignKey('reporttype.id'))
	timestamp = db.Column(db.DateTime)
	as_of_date = db.Column(db.DateTime)
	universe_count = db.Column(db.Integer)
	full_payers_count = db.Column(db.Integer)
	partial_payers_count = db.Column(db.Integer)
	member_card_signers_count = db.Column(db.Integer)
	political_payers_count = db.Column(db.Integer)
	political_signers_count = db.Column(db.Integer)
	mailing_address_count = db.Column(db.Integer)
	work_email_count = db.Column(db.Integer)
	home_email_count = db.Column(db.Integer)
	sms_authorization_count = db.Column(db.Integer)
	home_phone_count = db.Column(db.Integer)
	cell_phone_count = db.Column(db.Integer)