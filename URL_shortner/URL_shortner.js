


if (Meteor.isClient) {


  Template.hello.helpers({
      Counter: function(){

      return Session.get("Counter");
    }


  });

  Template.hello.events({

    'submit form' : function(event){


        event.preventDefault();

      var oURL = event.target.oURlTag.value;


        oURL = oURL + " This is auto generated";

      Session.set("Counter",oURL);


    }

  });
}

//This is a

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
