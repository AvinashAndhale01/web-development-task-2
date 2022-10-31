
var name=[];
var name1=[];
var dob=[];
var email=[];
var add=[];
var branch =[];
var mob =[];
var gender = [];
var n=0;
var x=1;
function Addrow(){
var AddRown = document.getElementById('show');
var NewRow = AddRown.insertRow(n);
name[x]=document.getElementById('fname').value;
name1[x]=document.getElementById('fname').value;
dob[x]=document.getElementById('DOB').value;
email[x]=document.getElementById('mail').value;
  add[x]=document.getElementById('address').value;
   branch[x]=document.getElementById('dept').value;
  mob[x]=document.getElementById('number').value;
gender[x] =document.getElementById('gen').value;

var cel1=NewRow.insertCell(0);
var cel2=NewRow.insertCell(1);
var cel3=NewRow.insertCell(2);
var cel4=NewRow.insertCell(3);
var cel5=NewRow.insertCell(4);
var cel6=NewRow.insertCell(5);
var cel7=NewRow.insertCell(6);
cel1.innerHTML= name[x];
cel1.innerHTML= name1[x];
cel2.innerHTML= dob[x];
cel3.innerHTML= email[x];
cel4.innerHTML= add[x];
cel5.innerHTML=  branch[x];
cel6.innerHTML= mob[x];
cel7.innerHTML= gender[x];
n++;
x++;


}
