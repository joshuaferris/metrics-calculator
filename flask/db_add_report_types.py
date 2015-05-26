#!env/bin/python
from app import db,models

types = ['Bargaining Unit List', 'Branch', 'Division', 'Local', 'Unionwide']

for rt in types:
    report = models.ReportType(name=rt)
    db.session.add(report)
    db.session.commit()

