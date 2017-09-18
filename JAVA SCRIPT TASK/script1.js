x={
  "data": {
       "items": [
      {"id": "1", "name": "Snatch", "type": "Software Developer"},
      {"id": "2", "name": "WitchesofEastwick", "type": "UI Developer"},
      {"id": "3", "name": "X-Men", "type": "action"},
      {"id": "4", "name": "OrdinaryPeople", "type": "drama"},
      {"id": "5", "name": "BillyElliot", "type": "drama"},
      {"id": "6", "name": "ToyStory", "type": "children"}
  ],
  "com": [
{"cname": "WIPRO", "location": "Banglore"},
{"cname": "TCS", "location": "Kolkatta"},
{"cname": "DELL", "location": "Chennai"},
{"cname": "OFS", "location": "Delhi"},
{"cname": "IBM", "location": "Chennai"},
{"cname": "Google", "location": "Madurai"}
  ]
}
}

id=[];
name=[];
type=[];
cname=[];
location=[];



for(var i=0;i<(x.data.com).length;i++)
        {
              cname[i]=x.data.com[i].cname;
              location[i]=x.data.com[i].location;
          }


          for(var i=0;i<(x.data.com).length;i++)
                  {
console.log(x.data.com[i].cname);

console.log(x.data.com[i].location);

function createTable(){
collection=[id,name,type];

 for(var i=0;i<(x.data.items).length;i++)
         {
               id[i]=x.data.items[i].id;
               name[i]=x.data.items[i].name;
               type[i]=x.data.items[i].type;
           }


columnLength=document.getElementById("table").rows[0].cells.length;
console.log((x.data.items).length);
console.log(columnLength);


for(i=0;i<(x.data.items).length;i++){
console.log(collection[i]);

}
for(i=0;i<(x.data.items).length;i++){
 var row=document.getElementById("table").insertRow();
for(j = 0 ; j <1 ; j++){
  row.insertCell().innerHTML=(x.data.items[i].id);
  row.insertCell().innerHTML=(x.data.items[i].name);
  row.insertCell().innerHTML=(x.data.items[i].type);
  row.insertCell().innerHTML=("<button type='button' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-pencil'></span>Edit</button> <button type='button' class='btn btn-sm btn-danger'><span class='glyphicon glyphicon-trash'></span> Delete</button>");

}

}
}




function onClick(){

  var row=document.getElementById("table").insertRow();
  row.insertCell().innerHTML=("7");
  row.insertCell().innerHTML=("Tushar");
  row.insertCell().innerHTML=("Comedy");


  x.data.items.push(
    {"id": "7", "name": "Douglas Adams", "type": "comedy"});
local.set('value',x.data.items);

}



function onClick1(){


document.getElementById("table").deleteRow(((x.data.items).length)+1);


delete x.data.items[4];
local.set('value',x.data.items);


}


function company(){
document.getElementById("emp").style.display = "none";
}

function employee(){
document.getElementById("com").style.display = "none";
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
