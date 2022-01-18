// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = { // interface of Friends modal

  // TODO: Define how you want to store your list of friends.
  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  //order does not matter, but do not want duplicates
  _data: new Set(),

  items: function () {
    return [ ...Friends.storage];
  },
  isFriend: function (name) {
    return Friends.storage.has(name); //has is a Set data structure
  },
  toggleStatus: function(name, callback = () => {}) { //check if friend is in the friend list
    if (is(Friends.isFriend(name))) {
      Friends.storage.delete(name);
      callback(false);
    } else {
      Friends.storage.add(name);
      callback(true);
    }
  }
};