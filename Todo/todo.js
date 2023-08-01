document.querySelector("form").addEventListener("submit", toDoList);

function toDoList(){
event.preventDefault();

var itemName = document.querySelector("#name").value;
var quantity = document.querySelector("#qty").value; 
var priority = document.querySelector("#priority").value;

var tr = document.createElement("tr");

var td1 = document.createElement("td");
td1.innerText = itemName;
var td2 = document.createElement("td");
td2.innerText = quantity;
var td3 = document.createElement("td");
td3.innerText = priority;

tr.append(td1, td2, td3);
document.querySelector("tbody").append(tr);
}