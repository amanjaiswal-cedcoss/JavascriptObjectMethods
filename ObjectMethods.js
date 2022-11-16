const emp = {position:"",type:"",isAvailable:null};
const foodItems={vegetable:"potato",fruit:"mango"}
let Employee=Object.create(emp);

function showDetails() {
    Employee.position=document.getElementById("selectPosition").value;
    Employee.type=document.getElementById("selectType").value;
    Employee.isAvailable=document.getElementById("selectAvailability").value;
    document.getElementById("showDetails").innerText="Employee = "+JSON.stringify(Employee);
}
function freeze(){
    Object.freeze(Employee)
    document.getElementById("showFreeze").innerText=JSON.stringify(Employee);
}
function displayKeys(){
    let keysArray=Object.keys(Employee);
    document.getElementById("showKeys").innerText="Keys Array = "+JSON.stringify(keysArray);   
}
function displayValues(){
    let valuesArray=Object.values(Employee);
    document.getElementById("showValues").innerText="Values array = "+JSON.stringify(valuesArray);
}
function displayKeysValues(){
    let keysArray=Object.keys(Employee);
    let valuesArray=Object.values(Employee);
    let keyValuePairsArrray=[];
    for(let i=0;i<keysArray.length;i++){
        keyValuePairsArrray.push([keysArray[i],valuesArray[i]])
    }
    document.getElementById("showKeysValuesPairs").innerText="Keys values pairs nested array = "+JSON.stringify(keyValuePairsArrray);
}
function merge(){
    document.getElementById("showMerge").innerHTML="Food Items Object = "+JSON.stringify(foodItems)
    Object.assign(foodItems,Employee);
    document.getElementById("showMerge").innerHTML+=" <br/> Merged Object = "+JSON.stringify(foodItems);
}