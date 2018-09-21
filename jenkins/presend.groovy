import groovy.json.JsonSlurper;

def var = build.getEnvVars()
var.each{k, v -> logger.print("${k}:${v} \n")}

def authString = "user:pwd".bytes.encodeBase64().toString()

def getJira(url, auth) {
  def fullUrl = build.getEnvVars().get('JIRA_URL') + url
  def connection = fullUrl.toURL().openConnection()
  connection.addRequestProperty("Authorization", "Basic ${auth}")

  connection.setRequestMethod("GET")
  connection.doOutput = false
  connection.connect()
  connection.content.text
}

def wrap2JiraLink(it) {
  def jiraUrl = build.getEnvVars().get('JIRA_URL')
  return "<a href='${jiraUrl}browse/${it.key}' title='${it.summary}' target='_blank'>${it.key}</a>"
}

logger.print("durationString: ${build.durationString} \n")

// get the email content
def emailContent = msg.getContent().getBodyPart(0).getContent()
emailContent = emailContent.replace('${duration}', build.durationString)

if (var.get('JIRA_ISSUES')) {
  def jiraIssues = var.get('JIRA_ISSUES').split(',').toUnique().join(',')
  def jsonStr = getJira("rest/api/2/search?jql=issueKey+in+(${jiraIssues})", authString)
  def jsonSlurper = new JsonSlurper()
  def jiraList = jsonSlurper.parseText(jsonStr)

  def jiraContent = ""
  jiraList.issues.each {
    jiraContent += "<tr>"
    jiraContent += "<td>${it.key}</td>"
    jiraContent += "<td>${it.fields.summary}</td>"
    jiraContent += "<td>${it.fields.resolution ? it.fields.resolution.name : null}</td>"
    jiraContent += "<td>${it.fields.issuetype ? it.fields.issuetype.name : null}</td>"
    jiraContent += "<td>${it.fields.fixVersions ? it.fields.fixVersions.name : null}</td>"
    // jiraContent += "<td>${it.fields.security.name}</td>"
    // jiraContent += "<td>${it.fields.creator.displayName}</td>"
    jiraContent += "<td>${it.fields.assignee ? it.fields.assignee.displayName : null}</td>"
    jiraContent += "<td>${it.fields.reporter ? it.fields.reporter.displayName : null}</td>"
    jiraContent += "<td>${it.fields.priority ? it.fields.priority.name : null}</td>"
    // jiraContent += "<td>${it.fields.customfield_10100.value}</td>"
    jiraContent += "<td>${it.fields.status ? it.fields.status.name : null}</td>"
    jiraContent += "</tr>"

    jiraContent = jiraContent.replaceAll(it.key, wrap2JiraLink(it))
    emailContent = emailContent.replaceAll(it.key, wrap2JiraLink(it))
  }

  emailContent = emailContent.replace('${jiraContent}', jiraContent)
} else {
  emailContent = emailContent.replace('${jiraContent}', '')
}

def mscriptsMatcher = emailContent =~ /\s(dml|ddl)\_(\d{4,})\_([a-z]+)\.sql/
if (mscriptsMatcher.count) {
  def scriptsList = []
  mscriptsMatcher.each {
    scriptsList.push(it[0])
  }

  scriptsList = scriptsList.toUnique()

  def scriptsContent = ''
  scriptsContent += '<ul>'
  scriptsList.each {
    scriptsContent += "<li>${it}</li>"
  }
  scriptsContent += '</ul>'

  emailContent = emailContent.replace('${scriptsContent}', scriptsContent)
} else {
  emailContent = emailContent.replace('${scriptsContent}', '')
}


String encodingOptions = "text/html; charset=UTF-8;";

msg.setContent(emailContent, encodingOptions)
