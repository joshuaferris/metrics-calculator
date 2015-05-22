import json, urllib2

url = 'http://crmdata.seiu.org.s3.amazonaws.com/localscrmdata.json'
html = urllib2.urlopen(url)
response = html.read()
jsonified = json.loads(response)

local_names = []
for item in jsonified['locals']['local']:
    local_names.append(item['name'])

local_names = list(set(local_names))
local_names = sorted(local_names)
print local_names