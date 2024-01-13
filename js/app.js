document.querySelector("button").addEventListener("click",calculate);

function calculate(){
  var fn = document.querySelector("#fNum").value;
  var op = document.querySelector("#operation").value;
  var sn = document.getElementById("sNum").value;

  if(op == "sum"){
    var final = sum(fn,sn);
 }
  else if(op == "sub"){
   var final = sub(fn,sn);
 }
 else if(op == "mul"){
   var final = mul(fn,sn);
 }
 else if(op == "div"){
   var final = div(fn,sn);
 }
 else if(op == "mod"){
  var final = mod(fn,sn);
}

 document.querySelector("#showresult").innerHTML = final;

}


function sum(x,y){
  
 var result = parseFloat(x) +  parseFloat(y);
 return result;

}

function sub(x,y){
  
 var result = parseFloat(x) - parseFloat(y);
 return result;

}


function mul(x,y){
  
 var result = parseFloat(x) * parseFloat(y);
 return result;

}


function div(x,y){
  
 var result = parseFloat(x) / parseFloat(y);
 return result;

}


function mod(x,y){
  
  var result = parseInt(x) % parseInt(y);
  return result;
 
 }
 

