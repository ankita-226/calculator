let input =document.getElementById("input-box")
let button=document.querySelectorAll("button")

let string =""
// let arr=Array.from(button)
button.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML== "="){
            calculateNumber=eval(string)
            input.value=calculateNumber
        }
        else if(e.target.innerHTML=='AC')
        {
            string=""
            input.value=string
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,  string.length-1)
            input.value=string
        }
        else{
        string += e.target.innerHTML
        input.value=string
        }
    })
})