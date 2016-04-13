//Initialize variables
var API_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-<dc>';
var mc_base_url = 'https://us10.api.mailchimp.com/3.0';
var mc_list_id = 'xxxxxxxxxx';

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName('');

/**
 * Uses the MailChimp API (v3.0) to update a subscriber via PUT
 */
function sendToMailChimp_(fn, ln, em, pts){
    //Header of PUT request
    var headers = {
     'Authorization': 'Basic ' + Utilities.base64Encode('username' + ':' + API_KEY, Utilities.Charset.UTF_8),
  
    };
    
    //MailChimp API requires MD5 hash of email to identify a subscriber
    function md5(str) {
        return Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, str).reduce(function(str,chr){
        chr = (chr < 0 ? chr + 256 : chr).toString(16);
        return str + (chr.length==1?'0':'') + chr;
        },'');
    }
    var emHash = md5(em.toLowerCase());
    
    //Body of PUT request
    var payload =  JSON.stringify({ 
    "status_if_new": "subscribed", 
    "email_address": em,
    "merge_fields": {
        "FNAME": fn, 
        "LNAME": ln,
        "POINTS": pts
    }
    });

  //put the above variables together into 'options'
  var options = {
    "headers" : headers,
    "payload": payload,
    "method" : "put",
    "muteHttpExceptions" : true
  };
  //PUT request to specific subscriber in Mailchimp
  var response = UrlFetchApp.fetch(mc_base_url + '/lists/' + mc_list_id + '/members/' + emHash,options);
 
  Logger.log(response);
}

/**
 * onEdit Trigger Function
 */
function onEdit(e) {
var activeSheet = e.source.getActiveSheet();
var range = e.range;
//gets Index value of row which contains edited cell (e.g. cell A60 was edited, rowedited = 60)
var rowedited = range.getRowIndex();
//if edited sheet is not "Points", die. else continue
  if (activeSheet.getName() !== "Points"){
      return;
      Logger.log("Oops :(");
  }
  else {
      //capture value of first name, last name, email, and points specifically of the row that was edited
      var values = sheet.getRange(rowedited, 1, 1, 4).getValues()[0];
      //separate values variable
      var fname = values[0];
      var lname = values[1];
      var email = values[2];
      var points = values[3];
      sendToMailChimp_(fname,lname,email,points);
  }
}
  

/**
 * For debugging Event Triggers. Select 'test_onEdit' function and run debug to test.
 * 
      function test_onEdit() {
        onEdit({
          user : Session.getActiveUser().getEmail(),
          source : SpreadsheetApp.getActiveSpreadsheet(),
          range : SpreadsheetApp.getActiveSpreadsheet().getActiveCell(),
          value : SpreadsheetApp.getActiveSpreadsheet().getActiveCell().getValue(),
          authMode : "LIMITED"
        });
}*/


