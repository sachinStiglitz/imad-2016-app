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

          request.open('GET http://coco98.imad.hasura-app.io/Launcher 'true');
          request.send(null);
          ////9G
};