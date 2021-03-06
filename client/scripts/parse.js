// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-rfp',

  //post function
  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message), // format before sending to parse
      contentType: 'application/json', //server is expecting
      success: successCB,
      error: errorCB || function(error) {
        console.log('.create fail message: Failed to post messages', error);
      }
    });
  },

  //get function
  //if error cb was not given as an argument to the readAll function then by default sets it to null
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};