let number1 = document.querySelector(".number1")
let number2 = document.querySelector(".number2")
let button1 = document.querySelector(".button1")
let plus = document.querySelector(".plus")

button1.addEventListener("click",() => { 
    if(plus.value == "+"){
        document.querySelector(".netice").textContent = +number1.value  +  +number2.value
    }else if(plus.value == "-"){
        document.querySelector(".netice").textContent = +number1.value  -  +number2.value
    }else if(plus.value == "*"){
        document.querySelector(".netice").textContent = +number1.value  *  +number2.value
    }else if(plus.value == "/"){
        document.querySelector(".netice").textContent = +number1.value  /  +number2.value
    }else{
        document.querySelector(".netice").textContent = "Error"
    }
}
)