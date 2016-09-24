var submit1 = document.getElementById("btnone");
submit.onclick = function() {
  //make a request to the server and sent a name
    var request = new XMLHttpRequest();
    //capture response
    request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //do something
        if(request.status === 200){
            //capture a list of names and render it as a list.
           var names = request.responseText;
           names = JSON.parse(names);
           var list ='';
           for (var i=0 ; i<names.length; i++) {
           list=list + '<li>'+ names[i] + '</li>';
           }
           var ul = document.getElementById("namelist");
           ul.innerHTML = list; 
        }
    }
        //don't do anything
    };
          //create request response page
        var nameInput = document.getElementById("name");
        var name = nameInput.value;
        request.open('GET',' http://sachinstiglitz.imad.hasura-app.io/submit-name?name='+ name, true);
        request.send(null);  
};
