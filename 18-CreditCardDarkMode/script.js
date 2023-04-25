
// setting.addEventListener("click",function(){
//    body1.style.backgroundColor = "black"
//    cardid.style.backgroundColor = "pink"
//    cardid.style.color = "hotpink"
    
// })

x=true
const body1 = document.getElementById("body1")
const setting = document.getElementById("setting")
const cardid = document.getElementById("cardid")

setting.addEventListener("click",function(){
if (x) {
   body1.style.backgroundColor = "black"
   cardid.style.color = "white"
   
   
} else {
   body1.style.backgroundColor = "white"
   cardid.style.color = "rgb(99, 96, 96)"
   
}
x=!x
})

