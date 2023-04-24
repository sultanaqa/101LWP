const bluep = document.getElementById("bluep")
const usdr = document.getElementById("usdr")
const expensive = document.getElementById("expensive")
const sekil2_1 = document.getElementById("sekil2_1")
const logo = document.getElementById("logo")
const cardred = document.getElementById("cardred")
const redp = document.getElementById("redp")
redp.addEventListener("click",function(){
    cardred.style.backgroundColor = "red"
    logo.style.backgroundColor = "red"
    document.getElementById("sekil2_1").src = "./assets/img/qirmizi.png";
    document.getElementById("expensive").innerHTML = "400,00"
    sekil2_1.style.transform = "rotate(-45deg)"
    sekil2_1.style.position = "absolute";
    sekil2_1.style.width = "130%";
    sekil2_1.style.bottom = "-50%";
    sekil2_1.style.left = "-24%";
    usdr.style.backgroundColor = "red";
})

bluep.addEventListener("click",function(){
    cardred.style.backgroundColor = "goldenrod"
    logo.style.backgroundColor = "goldenrod"
    document.getElementById("sekil2_1").src = "./assets/img/sekil (2).png";
    sekil2_1.style.transform = "rotate(0deg)";
    sekil2_1.style.position = "absolute";
    sekil2_1.style.width = "130%";
    sekil2_1.style.bottom = "-100%";
    sekil2_1.style.left = "-24%";
    usdr.style.backgroundColor = "rgb(51, 51, 150)";
    document.getElementById("expensive").innerHTML = "350,00"
    
})
bluep.addEventListener("click", function myMove() {
    let id = null;
    const elem = document.getElementById("sekil2_1");   
    let pos = -200;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 100) {
        clearInterval(id);
      } else {
        pos++; 
        
        elem.style.left = pos + "px"; 
      }
    }
  })

  redp.addEventListener("click", function myMove() {
    let id = null;
    const elem = document.getElementById("sekil2_1");   
    let pos = -250;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 50) {
        clearInterval(id);
      } else {
        pos++; 
        
        elem.style.left = pos + "px"; 
      }
    }
  })
  const numbers =document.querySelector(".numbers");
  
  for (let i = 0; i <numbers.children.length; i++) {
    numbers.children[i].addEventListener("click", () => {
      for (let j = 0; j < numbers.children.length; j++) {
        numbers.children[j].style.cssText = "";
      }
      numbers.children[i].style.cssText = `
      border-radius: 50%;
      color: white;
      width:9%;
      height:100%;
      display:flex;
      justify-content: center;
      padding:2%;
      background-color: rgb(17, 243, 175);`
      ;
});
}

const stars =document.querySelector(".stars");
  
  for (let i = 0; i <stars.children.length; i++) {
    stars.children[i].addEventListener("click", () => {
      for (let j = 0; j < stars.children.length; j++) {
        stars.children[j].style.cssText = "";
      }
      stars.children[i].style.cssText = `
      color:gray;
      `
      ;
});
}



//   const num1 = document.getElementById("num1")
//   num1.addEventListener("click",function(){
//     document.getElementById("num1").style.cssText = `
//     background-color: rgb(17, 243, 175);
//     color: white;
//     padding:1%;
//     width: 5%;
//     border-radius: 50%;
//     border: none;
// `;
//   })
  

    

  





