x={
  "data": {
       "items": [
      {"id": "0", "name": "Thushar", "type": "Software Developer"},
      {"id": "1", "name": "Rajkamal", "type": "UI Developer"},
      {"id": "2", "name": "Alocious", "type": "HR"},
      {"id": "3", "name": "Harsha", "type": "Tester"},
      {"id": "4", "name": "Saravana", "type": "Java Developer"},
      {"id": "5", "name": "Kannan", "type": "Software Developer"}
  ],
  "com": [
{"sno":"0","cname": "WIPRO", "loc": "Banglore"},
{"sno":"1","cname": "TCS", "loc": "Kolkatta"},
{"sno":"2","cname": "DELL", "loc": "Chennai"},
{"sno":"3","cname": "OFS", "loc": "Delhi"},
{"sno":"4","cname": "IBM", "loc": "Chennai"},
{"sno":"5","cname": "Google", "loc": "Madurai"}
  ]
}
}

id=[];name=[];type=[];
sno=[];
cname=[];
loc=[];
a=[];


for(var i=0;i<(x.data.com).length;i++)
        {

          sno[i]=x.data.com[i].sno;
          cname[i]=x.data.com[i].cname;
          location[i]=x.data.com[i].loc;
          }

function createTable(){
collection=[id,name,type];

 for(var i=0;i<(x.data.items).length;i++)
         {
               id[i]=x.data.items[i].id;
               name[i]=x.data.items[i].name;
               type[i]=x.data.items[i].type;
           }

columnLength=document.getElementById("table").rows[0].cells.length;

for(i=0;i<(x.data.items).length;i++){
 var row=document.getElementById("table").insertRow();
for(j = 0 ; j <1 ; j++){
  row.insertCell().innerHTML=(x.data.items[i].id);
  row.insertCell().innerHTML=(x.data.items[i].name);
  row.insertCell().innerHTML=(x.data.items[i].type);
  var c=(x.data.items[i].id);
  row.insertCell().innerHTML=("<button type='button' class='btn btn-sm btn-success' ><span class='glyphicon glyphicon-pencil'></span></button> <button type='button'  class='btn btn-sm btn-danger' onClick='onClick1(\""+(x.data.items[i].id)+"\");'><span class='glyphicon glyphicon-trash'></span></button>");

}
}
for(i=0;i<(x.data.com).length;i++){
 var row=document.getElementById("table1").insertRow();
for(j = 0 ; j <1 ; j++){
  row.insertCell().innerHTML=(x.data.com[i].sno);
  row.insertCell().innerHTML=(x.data.com[i].cname);
  row.insertCell().innerHTML=(x.data.com[i].loc);
  var b=(x.data.com[i].sno);
  row.insertCell().innerHTML=("<button type='button' class='btn btn-sm btn-success' ><span class='glyphicon glyphicon-pencil'></span></button> <button type='button'  class='btn btn-sm btn-danger' onClick='onClick2(\""+(x.data.com[i].sno)+"\");'><span class='glyphicon glyphicon-trash'></span></button>");

}

}

}


function addCom(){
  document.getElementById("addcom").style.display = "block";



  var row=document.getElementById("table").insertRow();
  row.insertCell().innerHTML=("7");
  row.insertCell().innerHTML=("Tushar");
  row.insertCell().innerHTML=("Comedy");


  x.data.items.push(
    {"id": "7", "name": "Douglas Adams", "type": "comedy"});
local.set('value',x.data.items);

}



function onClick1(c){

  console.log("button"+c);
var s=c++;
++s;
  console.log(s);
document.getElementById("table").deleteRow(s);
delete x.data.items[s];
local.set('value',x.data.items);



}




function onClick2(c){

  console.log("button"+c);
var s=c++;
++s;
  console.log(s);
document.getElementById("table1").deleteRow(s);
delete x.data.items[s];
local.set('value',x.data.com);



}

function company(){

document.getElementById("com").style.display = "block";
document.getElementById("emp").style.display = "none";
document.getElementById("welcome").style.display = "none";
}

function employee(){
document.getElementById("com").style.display = "none";
document.getElementById("emp").style.display = "block";
document.getElementById("welcome").style.display = "none";
}
function hideaddcom()
{
  document.getElementById("addcom").style.display = "none";

}
function hideaddemp()
{
  document.getElementById("addemp").style.display = "none";

}

var local = (function(){
    var setData = function(key,obj){
        var values = JSON.stringify(obj);
        localStorage.setItem(key,values);
    }
    var getData = function(key){
        if(localStorage.getItem(key) != null){
        return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }
    var updateDate = function(key,newData){
        if(localStorage.getItem(key) != null){
            var oldData = JSON.parse(localStorage.getItem(key));
            for(keyObj in newData){
                oldData[keyObj] = newData[keyObj];
            }
            var values = JSON.stringify(oldData);
            localStorage.setItem(key,values);
        }else{
            return false;
        }
    }
    return {set:setData,get:getData,update:updateDate}
})();
