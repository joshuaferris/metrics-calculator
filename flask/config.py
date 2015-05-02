import os
basedir = os.path.abspath(os.path.dirname(__file__))

# database config -- replace this with server you want to use
#SQLALCHEMY_DATABASE_URI = 'mysql://hackathonroot:hb2ntCMypcQo@hackathon-mysql.seiuaws.org:3306/hackathon'
SQLALCHEMY_DATABASE_URI = 'mysql://metrics:seiumetrics1234@localhost/seiumetrics'
SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

WTF_CSRF_ENABLED = True
SECRET_KEY = 'this-is-a-secret'