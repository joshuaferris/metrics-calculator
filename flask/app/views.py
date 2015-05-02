from flask import render_template
from app import app, models
from .forms import UnionMetricsForm

@app.route('/', methods=['GET', 'POST'])
def index():
	form = UnionMetricsForm()
	report_types = models.ReportType.query.all()
	form.report_type.choices = [(rt.id, rt.name) for rt in report_types]
	if form.validate_on_submit():
		return render_template('success.html', form=form)
	return render_template('index.html', form=form)