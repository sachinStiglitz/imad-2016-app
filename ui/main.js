//counter

var button = document.getElementById("counter");

button.onclick= function() {
    // make request
    var request = new XMLHttpRequest();
    
    //capture response
    request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //do something
        if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
    
        }
    }
        //don't do anything
    };
          //create rewuest response page

          request.open('GET',' http://sachinstiglitz.imad.hasura-app.io/counter', true);
          request.send(null);
              
};


//submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function() {
  //make a request to the server and sent a name
  
  //capture a list of names and render it as a list.
  var names = ['name 1','name 2','name 3','name 4']; 
  var list ='';
  for (var i=0 ; i<names.length();i++){
      list=list + '<li>'+ names[i] + '</li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};