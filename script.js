console.log(" page loading...")
var close=
document.getElementsByClassName("closebtn");
var i;
for (i =0; i< close.length; i++){
    close[i].onclick=function(){
        var div= this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){div.style.display = "none";}, 600);
    }
    }
 function load(){
    alert("Loading weather report")
 }    

function c2f(temp){
    return Math.round (9 / 5 * temp + 32);
}
function f2c(temp){
    return Math.round (5 / 9 * (temp - 32));
}


 function change(element){
    console.log(element.value);
 for(var i=1; i<9; i++){
    var tempSpan = document.querySelector("#temp" + i);
    var tempVal = parseInt(tempSpan.innerText);
    if (element.value == "°C"){
        tempSpan.innerText = (f2c(tempVal));
    } else {
        tempSpan.innerText = (c2f(tempVal));
    }
  }
}


