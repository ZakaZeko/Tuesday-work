


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







      var URLrequested = Meteor.absoluteUrl();

      var TheURL = "http://localhost:3000/0001";




      if(URLrequested == TheURL){

         window.location.href = "www.google.com";


      }

    // code to run on server at startup
  });


    Meteor.methods({
        'func' : function(argument){
            var TheURL = "http://localhost:3000/0001";

            if(argument == TheURL){

                return "www.google.com";
            }else {

                return "www.bing.com";
            }



        }
    });




}




