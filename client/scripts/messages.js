// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  _data: {},
  // {
  //   id1: {MessagesObj: {username, text, roomnum}},
  //   id2: {MessagesObj: {username, text, roomnum}},
  //   id3: {MessagesObj: {username, text, roomnum}},
  // }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieveFrom: function() {
    // console.log(Messages);
    Parse.readAll((data) => {
      console.log('this data: ', data);
      //iterate through the data array containing obj (as elements) of each post to the client
      for (var eachMessageObj of data) {
        //create a value obj with each key being the id and value pointing to that spefic messageObj
        //create a new key value pair for each uniqie id in the _data obj
        Messages._data[eachMessageObj.message_id] = eachMessageObj;
        MessagesView.render(Object.values(Messages._data));
      }
      // examine the response from the server request:
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  //given an obj (from the form submission) adds this new obj form to the Messages._data obj
  addTo: function(newFormObj) {
    Parse.create(newFormObj, (data) => {
      Messages._data[newFormObj.message_id] = newFormObj;
      //render the new message
      MessagesView.render(Object.values(Messages._data));
    });
  },

  //what if the message does not have a username, text or roomname property
};
