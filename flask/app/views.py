from flask import render_template
from app import app
from .forms import UnionMetricsForm

@app.route('/', methods=["GET", "POST"])
def index():
	form = UnionMetricsForm
	return render_template('index.html', form=form)