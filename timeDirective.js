angular.module("timeApp").directive("showtime", function(){

return{
  restict: 'E',
  template: '<div>Current time is: {{time}}</div>',
  link: function(scope, element, attributes){
    var currentTime = new Date();
    scope.time = currentTime.toString();

  }

};


});
