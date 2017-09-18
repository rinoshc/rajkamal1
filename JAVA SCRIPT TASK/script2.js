y={
  "datas": {
       "items": [
{"cname": "WIPRO", "location": "Banglore", "Product": "E-Bank Basket"},
{"cname": "TCS", "location": "Kolkatta", "Product": "Auto Transer"},
{"cname": "DELL", "location": "Chennai", "Product": "Smart Wallet"},
{"cname": "OFS", "location": "Delhi", "Product": "AML"},
{"cname": "IBM", "location": "Chennai", "Product": "LIFI"},
{"cname": "Google", "location": "Madurai", "Product": "NEXUS Kit"}
  ]}
}

cname=[];
location=[];
Product=[];
function createTable1(){
collections=[cname,location,Product];

 for(var i=0;i<(y.datas.items).length;i++)
         {
               id[i]=y.datas.items[i].cname;
               name[i]=y.datas.items[i].location;
               type[i]=y.datas.items[i].Product;
           }

columnLength=document.getElementById("table1").rows[0].cells.length;
console.log((y.datas.items).length);
console.log(columnLength);


for(i=0;i<(y.datas.items).length;i++){
console.log(collections[i]);

}
for(i=0;i<(y.datas.items).length;i++){
 var row=document.getElementById("table1").insertRow();
for(j = 0 ; j <1 ; j++){
  row.insertCell().innerHTML=(y.datas.items[i].cname);
  row.insertCell().innerHTML=(y.datas.items[i].location);
  row.insertCell().innerHTML=(y.datas.items[i].Product);
  row.insertCell().innerHTML=("<button type='button' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-pencil'></span>Edit</button> <button type='button' class='btn btn-sm btn-danger'><span class='glyphicon glyphicon-trash'></span> Delete</button>");

}

}
}
