





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





      Session.set("Counter",oURL);


    }


  });


    window.onload = function(){

          Meteor.call("func",window.location.href, function(error,result){

              if(error){

                  alert("error");

              }else {




                  if(result != "False"){

                      if(result != "Skip" ){

                          window.location = result;

                      }

                  }else {

                      alert("Please enter valid URL")
                  }

              }




          });

    };


}

//This is a

if (Meteor.isServer) {


 TheDataBase = new  Mongo.Collection('URLS');


  Meteor.startup(function () {

  });






    Meteor.methods({
        'func' : function(argument) {






            var TheHtml = "http://localhost:3000/0001";


            if (argument === TheHtml) {

                return "http://google.com";


            } else if (argument === "http://localhost:3000/") {

                return "Skip";

            } else {

                return "False";
            }

        },



        'CreateURL' : function(arrg){

            

            TheDataBase.insert(arrg);


        }




    });

}








