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
           var names1 = request.responseText;
           names1 = JSON.parse(names1);
           var list1 ='';
           for (var i1=0 ; i1<names1.length; i1++) {
           list1=list1 + '<li>'+ names1[i1] + '</li>';
           }
           var ul1 = document.getElementById("ul1");
           ul1.innerHTML = list1; 
        }
    }
        //don't do anything
    };
          //create request response page
        var nameInput1 = document.getElementById("one");
        var name1 = nameInput1.value;
        request.open('GET',' http://sachinstiglitz.imad.hasura-app.io/one?name='+ name1, true);
        request.send(null);  
};


