let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let mode = "write";
let currcolor = "black";

const grid = document.querySelector(".grid-container");
const resetbtn = document.querySelector("#reset");
const rangeSlider = document.getElementById("myRange");
const value = document.getElementById("value");
const set = document.getElementById("set");
const erase = document.getElementById("eraser");
const pencil = document.getElementById("pencil");


pencil.addEventListener("click", (e)=>{
    mode = "write";
    currcolor = "black";
    activate(e);
})

erase.addEventListener("click", (e)=>{
    mode = "erase";
    currcolor = "white";
    activate(e);
})

resetbtn.addEventListener('click',(e)=>{
    let children = document.querySelectorAll(".child");
    children.forEach(child =>
        child.style.backgroundColor = "white"
    )
});

function activate(e){
    if(mode === "write"){
        pencil.classList.add("selected");
        erase.classList.remove("selected");
    }
    else{
        pencil.classList.remove("selected");
        erase.classList.add("selected");
    }
    
}

function createDivs(n){
    for(var i = 0;i < n;i++){
        const div = document.createElement("div");
        div.addEventListener("mouseover",  changeColor);
        div.addEventListener("mousedown", changeColor);
        div.className = "child";
        grid.appendChild(div);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    
    if(mode === "write"){
        e.target.style.backgroundColor = currcolor;
    }
    if(mode === "erase"){
        e.target.style.backgroundColor = "white";
    }

}

function creategrid(n){
    grid.style.gridTemplateColumns = `repeat(${n},1fr)`;
    grid.style.gridTemplateRows = `repeat(${n},1fr)`;
    createDivs(n*n);
}

function deletegrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function slider(){
    value.innerHTML = rangeSlider.value;
    rangeSlider.oninput = () =>{
        value.innerHTML = rangeSlider.value;
    }

    set.addEventListener("click", ()=>{
        deletegrid();
        creategrid(value.innerHTML);
    })
    
}

function buttonlistener(){
    slider();
}

function start(){
    creategrid(64);
    buttonlistener();
    
}

start();