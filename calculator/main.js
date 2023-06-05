const numbers = document.querySelectorAll('[data-number]');
const arthemics = document.querySelectorAll("[data-operator]");
const clearbutton = document.getElementById("clear");
const deletebutton = document.getElementById("delete");
const lastscreen = document.querySelector(".screen-last");
const firstscreen = document.querySelector(".screen-current")
const point = document.getElementById("point");
const equal = document.getElementById("equal")

let operator = "";
let calculation = "";

numbers.forEach(button=> {
    button.addEventListener('click',() =>{
        var value = button.innerHTML;
        if(firstscreen.innerHTML === "0"){
            firstscreen.innerHTML = value;
        }
        else{
            firstscreen.innerHTML = firstscreen.innerHTML + value;
        }
        
    })
})

arthemics.forEach(btn => {
    btn.addEventListener('click',(e) =>{
        lastscreen.innerHTML = firstscreen.innerHTML + btn.innerHTML;
        firstscreen.innerHTML = "";
        operator = btn.innerHTML;
    })
})

point.addEventListener('click', ()=>{
    if(firstscreen.innerHTML.includes(".")){
        return;
    }
    else{
        firstscreen.innerHTML = firstscreen.innerHTML + ".";
    }
})

clearbutton.addEventListener('click',() =>{
    lastscreen.innerHTML = "";
    firstscreen.innerHTML = "0";

})

deletebutton.addEventListener('click',()=>{
    var strings = firstscreen.innerHTML.slice(0, firstscreen.innerHTML.length - 1)
    firstscreen.innerHTML = strings;
})

equal.addEventListener('click', ()=>{
    var temp = lastscreen.innerHTML
    lastscreen.innerHTML = "";
    temp += firstscreen.innerHTML;
    lastscreen.innerHTML = temp;
    var inputnumbers = temp.split(operator);
    var sum = Operation(operator,Number(inputnumbers[0]),Number(inputnumbers[1]));

    console.log(sum);
    firstscreen.innerHTML = sum;
})

function Operation(op,a,b){
    switch(op){
        case "x":
            return a*b;
        case "÷":
            return a/b;
        case "-":
            return a-b;
        case "+":
            return a+b;
        default:
            return null
    }
}