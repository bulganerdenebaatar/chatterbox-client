// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    //there is a submit handlerer on the form itself
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  //create the handler for the submit button
  handleSubmit: function(event) { // invoking addTo
    // Stop the browser from submitting the form without ajax, which would result in a refresh of the page
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {
      username: App.username,
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('#message').val()
    };

    Parse.create(message, (data) => {
      Object.assign(message, data);
      Messages.addTo(message);
    }),
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};