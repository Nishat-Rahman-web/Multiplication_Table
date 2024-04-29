let input  = document.querySelector('.input')
let button = document.querySelector('.button')
let output = document.querySelector('.output')

button.addEventListener('click' , ()=>{
    if(input.value == ('')){
        alert("Inputbox is empty. So take input from user")
    }
    else{
        for(let i = 1; i<=10; i++){
            output.innerHTML += input.value + ' x ' + i + ' = ' + input.value*i + '<br>'
        }
    }
})