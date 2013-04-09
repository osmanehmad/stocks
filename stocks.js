stocks = new Meteor.Collection("stocks");

if (Meteor.isClient) {
  Template.stats.stocks = function () {
    return stocks.find().fetch();
  };

  Template.stats.events({
    'click' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log();
    }
  });

  Template.new_stock.events({
    'click .submit' : function(){
      var type = document.getElementById("type").value;
      var price = document.getElementById("price").value;
      stocks.insert({'type':type,'price':price});
      console.log(type);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("started");
  });

  Meteor.methods({
    insert : function(json){stocks.insert(json);}
  });
}


