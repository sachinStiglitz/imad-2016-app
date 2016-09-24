//counter

var button = document.getElementById("counte");
button.onclick= function() {
    // make request
    
    //capture response
    
    //render the output var
  counter = counter+ 1;
  var span = document.getElementById("count");
  span.innerHTML = counter.toString();
    
};