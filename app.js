const dark = document.querySelector('.dark')

const light = document.querySelector('.light')

const night = document.querySelector('.night')

const sidebar = document.querySelector('.sidebar')

const activelistItem = document.querySelector('.listItem.active')

console.log( activelistItem)

night.addEventListener("click",()=>{
sidebar.className = "sidebar night"
activelistItem.className = " listItem active night"
})

dark.addEventListener("click",()=>{
sidebar.className = "sidebar"
activelistItem.className = "listItem active"
})

light.addEventListener("click",()=>{
sidebar.className = "sidebar light"
activelistItem.className = "listItem active light"
})