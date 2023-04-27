const form1 = document.getElementById("form1")
const name1 = document.getElementById("name1")
const surname1 = document.getElementById("surname1")
const gender1 = document.getElementById("gender1")
const course1 = document.getElementById("course1")
const age1 = document.getElementById("age1")
const btn1 = document.getElementById("btn1")

// let arr = []
// form1.addEventListener("submit",function (e){
//     let obj = {
//                 name: "",
//                  surname: "",
//             gender: "",
//                 course: "",
//                 age: "",
//             } 
//             obj.name = name1.value
//      obj.surname = surname1.value
//      obj.gender = gender1.value
//     obj.course = course1.value
//     obj.age = age1.value
    
//     console.log(obj);
//     arr.push(obj);
//     console.log(arr);
//     localStorage.setItem("arr", JSON.stringify(arr));
//     console.log(JSON.parse(localStorage.getItem("arr")));
//     e.preventDefault();
// })









console.log(JSON.parse(localStorage.getItem("arr")));
let arr = []
if (JSON.parse(localStorage.getItem("arr")) !== null){
    arr = JSON.parse(localStorage.getItem("arr")) ;
}

form1.addEventListener("submit", function(e) {
    let obj = {
        name: "",
        surname: "",
        gender: "",
        course: "",
        age: "",
    }
    obj.name = name1.value
    obj.surname = surname1.value
    obj.gender = gender1.value
    obj.course = course1.value
    obj.age = age1.value
    
    console.log(obj);
    arr.push(obj);
    console.log(arr);
e.preventDefault()
})