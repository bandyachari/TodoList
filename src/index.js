// let age = windows.promt("how old are you");

// age = age+1;

console.log("hello world");




console.log("hello world");

function addRow() {
    
    const form = document.getElementById("inputform")
    form.addEventListener("click", function(event){
        event.preventDefault()
      });
    
    const formData = new FormData(form);

    let tabl = document.getElementById('tab');
    const row = document.createElement('tr');

    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1])
        let data = document.createElement('td')
        data.innerHTML = pair[1]
        row.appendChild(data);
    }
    tabl.appendChild(row);
    var allinputs = document.querySelectorAll('input')
    allinputs.forEach(singleinput => singleinput.value ='')
    // let msg = prompt("give your name")
    console.log("inside Addrow")
}




