function addRow() {

    const formm = document.getElementById("inputform")
    const all_tasks = [];
    formm.addEventListener("click", function (event) {
        event.preventDefault();

        
        //         const each_task = document.getElementById("each_task").value;
        //         const date_picked = document.getElementById("date_picked").value;
        //         const late = document.getElementById("late").value;


        // const each_person = {
        //     newTask: each_task,
        //     newDatePicked: date_picked,
        //     newLate: late
        // };


        // all_tasks.push(each_person);

        // // date_picked = "";
        
        // console.log(all_tasks);
    });
    
   const formData = new FormData(formm);

    // console.log(formData);





    let tabl = document.getElementById('tab');
    const row = document.createElement('tr');

    for (const pair of formData.entries()) {
        console.log(pair[0], pair[1])
        let data = document.createElement('td')
        data.innerHTML = pair[1]
        row.appendChild(data);
    }

    
    tabl.appendChild(row);
    //document.getElementById("inputform").reset();

    console.log("inside Addrow")
}




