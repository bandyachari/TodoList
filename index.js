// let age = windows.promt("how old are you");

// age = age+1;

console.log("hello world");

let text = new String("hello world");

let i = document.getElementById('tab');

const l = document.createElement('td');
l.innerHTML = text;

const row = document.createElement('tr');
row.appendChild(l);
i.appendChild(row);


console.log("hello world");

function addRow(){
    const form = document.getElementById("inputform");
    const formData = new FormData(form);
    
    console.log("inside Addrow")
}




