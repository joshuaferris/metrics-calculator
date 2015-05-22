from flask import render_template
from app import app, db, models
from .forms import UnionMetricsForm
import datetime, json, time, urllib2

def get_local_names(url):
    html = urllib2.urlopen(url)
    response = html.read()
    jsonified = json.loads(response)

    local_names = []
    for item in jsonified['locals']['local']:
        local_names.append(item['name'])

    local_names = list(set(local_names))
    local_names = sorted(local_names)
    return local_names

def count_filled_out(form):
    count = 0
    for item in form.data:
        if form.data[item] is not None:
            count = count + 1
    return count

def percent_filled_out(form):
    count = count_filled_out(form) * 1.0
    return (count / len(form.data)) * 100

@app.route('/test', methods=['GET', 'POST'])
def test():
    form = UnionMetricsForm()
    report_types = models.ReportType.query.all()
    form.report_type.choices = [(rt.id, rt.name) for rt in report_types]

    return render_template('test.html', form=form, count=len(form.data))

@app.route('/', methods=['GET', 'POST'])
def index():
    form = UnionMetricsForm()
    report_types = models.ReportType.query.all()
    form.report_type.choices = [(rt.id, rt.name) for rt in report_types]
    
    local_names = get_local_names('http://crmdata.seiu.org.s3.amazonaws.com/localscrmdata.json')
    form.local.choices = []
    for name in local_names:
        form.local.choices.append((local_names.index(name), name))

    if form.validate_on_submit():
        # turn local name into text
        local_name = local_names[form.local.data]
        # check for valid user already
        user = models.User.query.filter_by(email=form.email.data).first()
        if user is None:
            user = models.User(email=form.email.data,local_name=local_name)
            db.session.add(user)
            db.session.commit()
        user = models.User.query.filter_by(email=form.email.data).first()
        
        report_details = models.ReportDetails(
            user_id = user.id,
            report_type_id = form.report_type.data,
            timestamp = datetime.datetime.utcnow(),
            as_of_date = form.as_of_date.data,
            obligation_count = form.obligation_count.data,
            full_dues_count = form.full_dues_count.data,
            partial_dues_count = form.partial_dues_count.data,
            member_card_count = form.member_card_count.data,
            political_contributor_count = form.political_contributor_count.data,
            political_card_count = form.political_card_count.data,
            mailing_count = form.mailing_count.data,
            work_email_count = form.work_email_count.data,
            home_email_count = form.home_email_count.data,
            sms_count = form.sms_count.data,
            home_phone_count = form.home_phone_count.data,
            cell_phone_count = form.cell_phone_count.data
            )
        db.session.add(report_details)
        db.session.commit()

        report = models.ReportType.query.filter_by(id=form.report_type.data).first()
        report_type_name = report.name
        return render_template('report.html', local_name=local_name,data=form,report_type_name=report_type_name)

    return render_template('index.html', form=form)

@app.route('/resources')
def resources():
    return render_template('resouces.html')

@app.route('/show_saved')
def show_saved():
    users = models.User.query.all()
    details = models.ReportDetails.query.all()

    return render_template('show_saved.html', users=users, details=details)
