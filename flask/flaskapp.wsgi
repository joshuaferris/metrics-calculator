#!env/bin/python
activate_this = '/home/matt/projects/metrics-calculator/flask/env/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))
from app import app as application
