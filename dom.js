// console.log("1")
// const display=document.querySelector('.list')
// console.log(display)
// console.log(display.children)
//      console.log(display.children[1].innerHTML);
// for (let i = 0; i < display.length; i++) {
//     const element = (display.children[i].innerHTML);
//     console.log(element)
    
// }

// display.children[1].style.color="orange";

// const DAYS= document.querySelector('.days')

// console.log(DAYS)
// console.log(DAYS.parentElement) 
// console.log(DAYS.parentNode)
const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = "9"
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.padding = "12px"
// div.innerText = "Chai aur code"
const addText = document.createTextNode("Chai aur code")
const anotherTExt=document.createTextNode("heh my name is saMIR KHAN ")
div.appendChild(anotherTExt)


document.body.appendChild(div)

