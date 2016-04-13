# Google Sheets to Mailchimp 

GSheetsToMC is a script written for Google Sheets that allows you to send edits on your spreadsheet to Mailchimp **merge fields** instantly. In this case, this script was written to accomodate my on-campus organization's needs [`(UNICEF at Illinois Tech)`](http://www.facebook.com/UNICEFatIIT).  

At UNICEF, we use a point system to keep track of members' volunteering hours, attendance, and eligibility for prizes. This point system is updated via a private spreadsheet on Google Drive accessible only to our executive board. We also use [Mailchimp](http://www.mailchimp.com) for our weekly newsletters and heavily rely on merge fields to update each member about their points.  The biggest problem was the lack of synchronization between Mailchimp and Google Sheets (no, we weren't interested in paying [Zapier](https://zapier.com) to automate the task).  We often forgot to re-import the spreadsheet and thus, received complaints about outdated points from our members.

The spreadsheet's layout is as follows:

First Name | Last Name | Email | Total Points | *Event 1* | *Event 2* | *More Events*
------------ | ------------- | ------------- | ------------- | ------------- | ------------- | -------------
Pratik | Sampat | pratiks0809@gmail.com | 5 | 2 | 3 | 0
 

## Resources
*Adopted from [acarrilo's form submission project](https://gist.github.com/acarrillo/5772508) 
*[Mailchimp API Documentation](http://developer.mailchimp.com/documentation/mailchimp/)
*[Google Developer Apps Script Documentation](https://developers.google.com/apps-script/)
*[MD5 Hash Function in Apps Script](http://stackoverflow.com/a/27933459)
*[Batch Operations and PUT in API v3.0](http://devs.mailchimp.com/blog/batch-operations-and-put-in-api-v3-0/)
*[Testing trigger functions in Apps Script](http://stackoverflow.com/a/16089067)

