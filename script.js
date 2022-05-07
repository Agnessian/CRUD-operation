var selectRow = null

function onFormSubmit(){
    if (validate()){
        var FormData = readFormData();
        if(selectRow == null)
            insertNewRecord(FormData);
        else
            updateRecord(FormData);
        resetForm();
    }  
}
function readFormData(){
    var FormData = {};
    FormData["fullname"] = document.getElementById("fullname").value;
    FormData["empcode"] = document.getElementById("empcode").value;
    FormData["salary"] = document.getElementById("salary").value;
    FormData["city"] = document.getElementById("city").value;
    return FormData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow (table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm(){
    document.getElementById("fullname").value="";
    document.getElementById("empcode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    selectRow = null;
}
function onEdit(td){
    selectRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectRow.cells[0].innerHTML;
    document.getElementById('empcode').value = selectRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectRow.cells[2].innerHTML;
    document.getElementById('city').value = selectRow.cells[3].innerHTML;
}
function updateRecord(FormData){
    selectRow.cells[0].innerHTML = FormData.fullname;
    selectRow.cells[1].innerHTML = FormData.empcode;
    selectRow.cells[2].innerHTML = FormData.salary;
    selectRow.cells[3].innerHTML = FormData.city;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid = true;
    if (document.getElementById("fullname").value == ""){
        isValid = false;
        document.getElementById('fullnameValidationError').classList.remove("hide");
        }else{
            isValid = true;
            if (!document.getElementById('fullnameValidationError').classList.remove("hide"))
                document.getElementById('fullnameV alidationError').classList.add("hide");
    }
    return isValid;
}