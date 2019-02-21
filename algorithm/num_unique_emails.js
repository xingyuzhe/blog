var numUniqueEmails = function(emails) {
    return new Set(emails.map(obj => obj.replace(/\+.$|\./g), '')).size
};