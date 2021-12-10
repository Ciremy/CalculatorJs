'use strict'
let operation =[]

let number = []

function nine(){
    number.push(9)
    previewOpreation()
}

function eight(){
    number.push(8)
    previewOpreation()
}

function seven(){
    number.push(7)
    previewOpreation()
}

function six(){
    number.push(6)
    previewOpreation()
}

function five(){
    number.push(5)
    previewOpreation()
}

function four(){
    number.push(4)
    previewOpreation()
}

function three(){
    number.push(3)
    previewOpreation()
}

function two(){
    number.push(2)
    previewOpreation()
}

function one(){
    number.push(1)
    previewOpreation()
}

function zero(){
    number.push(0)
    previewOpreation()
}

function plus(){
    pushNumber()
    operation.push("+")
    number = []
    previewOpreation()
}

function less(){
    pushNumber()
    operation.push("-")
    number = []
    previewOpreation()
}

function times(){
    pushNumber()
    operation.push("*")
    number = []
    previewOpreation()
}

function divide(){
    pushNumber()
    operation.push("/")
    number = []
    previewOpreation()
}

function equal(){
    pushNumber()
    let result = 0
    for (let i = 0; i < operation.length; i++) {
        if ( operation[i] === '+') {
            result = result + (operation[i-1] + operation[i+1])
        }else if (operation[i] === '-') {
            result = result + (operation[i-1] - operation[i+1])
        }else if (operation[i] === '*'){
            result = result + (operation[i-1] * operation[i+1])
        }else if (operation[i] === '/') {
            result = result + (operation[i-1] / operation[i+1])
        }
    }
    showResult(result)
}

function del(){
    if (number.length == 0) {
        operation.pop();
    }else{
        number.pop();
    }
    previewOpreation();
}

function ac(){
    number = []
    operation = []
    document.getElementById("result").innerHTML = ("")
}

function previewOpreation(){
    let x = document.getElementById("result");
    let preview = ""
    for (let i = 0; i < operation.length; i++) {
        preview += operation[i] + " ";        
    }
    for (let i = 0; i < number.length; i++) {
        preview += number[i] + "";        
    }
    x.innerHTML = (preview)
}

function showResult(result){
    document.getElementById("result").innerHTML = (result)
}

function pushNumber(){
    let catNumber = ""
    for (let i = 0; i < number.length; i++) {
        catNumber += number[i];
    }
    let endNumber = parseInt(catNumber)
    operation.push(endNumber)
}