// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // attaching to the DOM when application loads
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function(messagesArr) {
    //clear the previous html content of the chat element to avoid duplicate msgs
    MessagesView.$chats.html('');
    // TODO: Render _all_ the messages

    //iterate through the given messagesArr
    messagesArr.forEach(message => { //100+
      //render each messsage using render view
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //generate a new message DOM element
    //this is a DOM element wrapped in a jQuery element so use'$'
    var $message = MessageView.render(message);
    //append the message to the DOM
    MessagesView.$chats.prepend($message);
    // $('#title').appendTo()
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);
  }
};