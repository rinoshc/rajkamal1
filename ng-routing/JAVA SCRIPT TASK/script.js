
x={


  "data": {
       "items": [
      {"id": "1", "name": "Snatch", "type": "crime"},
      {"id": "2", "name": "WitchesofEastwick", "type": "comedy"},
      {"id": "3", "name": "X-Men", "type": "action"},
      {"id": "4", "name": "OrdinaryPeople", "type": "drama"},
      {"id": "5", "name": "BillyElliot", "type": "drama"},
      {"id": "6", "name": "ToyStory", "type": "children"}
  ]}
}

id=[];
name=[];
type=[];

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


document.getElementById("table").deleteRow((x.data.items).length);


delete x.data.items[4];
local.set('value',x.data.items);


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
