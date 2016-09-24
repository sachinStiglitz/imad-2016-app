var submit2 = document.getElementById("btntwo");
submit.onclick = function() {
  //make a request to the server and sent a name
    var request = new XMLHttpRequest();
    //capture response
    request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //do something
        if(request.status === 200){
            //capture a list of names and render it as a list.
           var names2 = request.responseText;
           names2 = JSON.parse(names2);
           var list2 ='';
           for (var i2=0 ; i2<names2.length; i2++) {
           list2=list2 + '<li>'+ names2[i2] + '</li>';
           }
           var ul2 = document.getElementById("ul2");
           ul2.innerHTML = list2; 
        }
    }
        //don't do anything
    };
          //create request response page
        var nameInput2 = document.getElementById("two");
        var name2 = nameInput2.value;
        request.open('GET',' http://sachinstiglitz.imad.hasura-app.io/two?name='+ name2, true);
        request.send(null);  
};
