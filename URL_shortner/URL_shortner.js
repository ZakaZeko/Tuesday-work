if (Meteor.isClient) {
  // counter starts at 0


  Template.hello.helpers({

  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked

    }
  });
}

//This is a

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
