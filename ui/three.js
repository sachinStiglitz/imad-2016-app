var submit3 = document.getElementById("btnthree");
submit.onclick = function() {
  //make a request to the server and sent a name
    var request = new XMLHttpRequest();
    //capture response
    request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //do something
        if(request.status === 200){
            //capture a list of names and render it as a list.
           var names3 = request.responseText;
           names3 = JSON.parse(names3);
           var list3 ='';
           for (var i3=0 ; i3<names3.length; i3++) {
           list3=list3 + '<li>'+ names3[i3] + '</li>';
           }
           var ul3 = document.getElementById("ul3");
           ul3.innerHTML = list3; 
        }
    }
        //don't do anything
    };
          //create request response page
        var nameInput3 = document.getElementById("three");
        var name3 = nameInput3.value;
        request.open('GET',' http://sachinstiglitz.imad.hasura-app.io/three?name='+ name3, true);
        request.send(null);  
};
