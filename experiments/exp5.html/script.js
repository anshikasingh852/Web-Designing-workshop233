//step 1: create an empty array to store all employees objects
let employees = []; 
//step 2: function to read input fields and save the data
function addEmployee() {
    //create a single employee object from the input fiels
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    };
     //add the new employee object to the end of the array
    employees.push(emp);
    //show a confirmation message
    alert("Employee added!");   
}
