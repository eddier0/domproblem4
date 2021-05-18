/*
1. write a function 
2. write a  variable that gets the element id from the html form and
displays its value.
3.console log how many items on the drop down list by using the get element
by id and .length.  
*/
function myFruit() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("fruit").innerHTML = x;
  }

  console.log(document.getElementById("mySelect").length);