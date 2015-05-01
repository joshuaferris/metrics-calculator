#!env/bin/python
import os
import unittest

from config import basedir
from app import app, db
from app.models import User

class TestCase(unittest.TestCase):
	def setUp(self):
		app.config['TESTING'] = True
		app.config['WTF_CSRF_ENABLED'] = True
		app.config['SQLALCHEMY_DATABSE_URI'] = 'mysql://hackathonroot:hb2ntCMypcQo@hackathon-mysql.seiuaws.org:3306/test'
		self.app = app.test_client()
		db.create_all()

	def tearDown(self):
		db.session.remove()
		db.drop_all()

	def test_add_user(self):
		u = User(email='test@test.com')
		db.session.add(u)
		db.session.commit()
		test_user = User.query.filter_by(email='test@test.com').first()
		assert test_user.id == 1
		assert test_user.email == 'test@test.com'

if __name__ == '__main__':
	unittest.main()