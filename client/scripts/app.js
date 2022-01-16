/*
Consider thr job each of these functions is doing and which file the function should ideally live
Take note of times where you are mixing concerns
Structure the files in your own way by placing similar or related functions(concerns) together

This API has two endpoints available to you:
    GET https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus
    POST https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/:campus

The message objects you send to the api server (via POST requests) should be in the following format:
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};

// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
*/

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    //fetch all messages from server and ends spinner when done
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    //set an interval to check for new data every 3 seconds
    setInterval(App.fetch, 3000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the serve request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms and re-render the corresponding views

      //Update & re-Render Messages
      Messages.retrieveFrom();
      //re-render the messagesView
      MessagesView.render(Object.values(Messages._data));
      //an array containing all of the given objects values //the messsges

      //Update and re-Render Rooms
      //retrieve new room data
      // Rooms.update();
      //re render the room
      // RoomsView.render();


      for (var eachMessageObj of data) {
        //create a value obj with each key being the id and value pointing to the username, text and roomname{
        var value = {};
        value.username = eachMessageObj.username;
        value.text = eachMessageObj.text;
        value.roomname = eachMessageObj.roomname;
        //create a new key value pair for each uniqie id in the _data obj

        Messages._data[eachMessageObj.message_id] = value;
      }
      // callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
